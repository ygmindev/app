import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import {
  APP_TYPE,
  BUNDLE_FORMAT,
  BUNDLE_SOURCEMAP,
} from '@lib/config/node/bundle/bundle.constants';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { getEnvironmentVariables } from '@lib/shared/core/utils/getEnvironmentVariables/getEnvironmentVariables';
import { packageInfo } from '@lib/shared/core/utils/packageInfo/packageInfo';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { type RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel as babelPlugin } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import nodeResolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';
import { type Plugin as EsbuildPlugin } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import esbuildPluginTsc from 'esbuild-plugin-tsc';
import flowRemoveTypes from 'flow-remove-types';
import { existsSync, readFileSync } from 'fs';
import { getTsconfig } from 'get-tsconfig';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import uniq from 'lodash/uniq';
import { sep } from 'path';
import posix from 'path/posix';
import { nodeExternals } from 'rollup-plugin-node-externals';
import vike from 'vike/plugin';
import {
  type Alias,
  createLogger,
  type Logger,
  type Plugin,
  searchForWorkspaceRoot,
  type ViteDevServer,
} from 'vite';
import { cjsInterop } from 'vite-plugin-cjs-interop';
// import { nodePolyfills } from 'vite-plugin-node-polyfills';

function vitePluginFullReload(entryFiles: Array<string>): Plugin {
  let server: ViteDevServer;
  return {
    configureServer(_server) {
      server = _server;
    },
    async handleHotUpdate(ctx) {
      const changed = ctx.file;
      let modules = server.moduleGraph.getModulesByFile(changed);
      if (!modules) return [];
      for (const entry of entryFiles) {
        modules = server.moduleGraph.getModulesByFile(entry);
        if (!modules) continue;
        const stack = [...modules];
        const visited = new Set();
        let isDep = false;
        while (stack.length > 0) {
          const mod = stack.pop();
          if (!mod || visited.has(mod.id)) continue;
          visited.add(mod.id);
          if (mod.file === changed) {
            isDep = true;
            break;
          }
          for (const dep of mod.importedModules) {
            if (!visited.has(dep.id)) {
              stack.push(dep);
            }
          }
        }
        if (isDep) {
          server.ws.send({ type: 'full-reload' });
          return [];
        }
      }
      return [];
    },

    name: 'vite-plugin-full-reload',
  };
}

export const esbuildPluginExcludeVendorFromSourceMap = (includes = []): EsbuildPlugin => ({
  name: 'plugin:excludeVendorFromSourceMap',
  setup(build) {
    const emptySourceMap =
      '\n//# sourceMappingURL=data:application/json;base64,' +
      Buffer.from(JSON.stringify({ mappings: 'A', sources: [''], version: 3 })).toString('base64');
    build.onLoad({ filter: /node_modules/ }, async (args) => {
      if (
        /\.[mc]?js$/.test(args.path) &&
        !new RegExp(includes.join('|'), 'u').test(args.path.split(sep).join(posix.sep))
      ) {
        return {
          contents: `${readFileSync(args.path, 'utf8')}${emptySourceMap}`,
          loader: 'default',
        };
      }
    });
  },
});

export const esbuildPluginResolveAlias = (
  aliases: Array<{ from: RegExp | string; to: string }>,
): EsbuildPlugin => ({
  name: 'plugin:resolveAlias',
  setup(build) {
    build.onResolve(
      {
        filter: new RegExp(
          `^${aliases
            .map(({ from }) =>
              from instanceof RegExp ? from.source : from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
            )
            .join('|')}$`,
        ),
        namespace: 'file',
      },
      ({ path }) => {
        const match = aliases.find(({ from }) =>
          from instanceof RegExp ? from.test(path) : from === path,
        );
        return match
          ? {
              external: true,
              path: match.from instanceof RegExp ? path.replace(match.from, match.to) : match.to,
            }
          : null;
      },
    );
  },
});

function vitePluginIsomorphicImport(serverExtension: string): Plugin {
  return {
    enforce: 'pre',
    name: 'vite-plugin-isomorphic-import',
    async resolveId(this, id, importer, options) {
      if (id[0] == '\0' || id.startsWith('virtual:') || id.startsWith('/virtual:')) {
        return null;
      }
      if (importer) {
        let resolved = await this.resolve(id, importer, { ...options, skipSelf: true });
        if (resolved && !resolved.external && options?.ssr) {
          const i = resolved?.id.lastIndexOf('.');
          const idF =
            i === -1
              ? joinPaths([resolved.id], { extension: serverExtension })
              : `${joinPaths([resolved.id.substring(0, i)], {
                  extension: serverExtension,
                })}${resolved.id.substring(i)}`;
          const resolvedServer = await this.resolve(idF, importer, { ...options, skipSelf: true });
          if (resolvedServer && existsSync(resolvedServer.id)) {
            resolved = resolvedServer;
          }
        }
        return resolved ?? { id };
      }
      return null;
    },
  };
}

export const _bundle = ({
  aliases,
  appType,
  assetsDir,
  babel,
  buildDir,
  commonjsDeps,
  dedupe,
  define,
  entryFiles,
  envFilename,
  envPrefix,
  exclude,
  extensions,
  externals,
  format = BUNDLE_FORMAT.ESM,
  include,
  isPreserveModules = false,
  isTranspileProject = false,
  logSuppressPatterns,
  mainFields,
  outDir,
  outExtension,
  platform,
  provide,
  publicPathname,
  rootDirs,
  server,
  serverExtension,
  sourcemap,
  transpileModules,
  transpilePatterns,
  typescript,
  watch,
}: BundleConfigModel): _BundleConfigModel => {
  const environment = Container.get(Environment);
  const platformF = platform ?? environment.variables.ENV_PLATFORM;

  const customLogger = createLogger();
  if (logSuppressPatterns) {
    const methods = ['warn', 'warnOnce', 'info', 'error'] satisfies Array<keyof Logger>;
    methods.forEach((method) => {
      const methodF = customLogger[method];
      customLogger[method] = (msg, options) => {
        if (some(logSuppressPatterns, (pattern) => msg.match(pattern))) {
          return;
        }
        methodF(msg, options);
      };
    });
  }

  const tsconfigDir = fromWorking(typescript?.configFilename);

  const transpiles = [
    ...(transpileModules ?? []),
    ...(transpilePatterns ?? []),
    ...(isTranspileProject
      ? [new RegExp('/*'), ...PACKAGE_PREFIXES.map((v) => new RegExp(`@${v}/*`))]
      : []),
  ];

  const pkg = packageInfo();
  const dependencies = Object.keys({
    ...pkg.dependencies,
    ...pkg.devDependencies,
    ...pkg.peerDependencies,
  });

  const transpileModulesF = uniq([
    ...(transpileModules?.filter((v) => some(dependencies, (d) => d.includes(v))) ?? []),
    ...(transpilePatterns
      ? dependencies.filter((d) => some(transpilePatterns, (re) => re.test(d)))
      : []),
  ]);

  const input = entryFiles
    ? isString(entryFiles)
      ? [entryFiles]
      : isArray(entryFiles)
        ? entryFiles
        : Object.values(entryFiles)
    : undefined;

  const config: _BundleConfigModel = {
    appType: appType === APP_TYPE.TOOL ? undefined : 'custom',

    build: {
      assetsDir,

      commonjsOptions: {
        defaultIsModuleExports: true,
        esmExternals: true,
        exclude: externals,
        requireReturnsDefault: 'auto',
        strictRequires: true,
        transformMixedEsModules: true,
      },

      copyPublicDir: false,

      emptyOutDir: true,

      lib: entryFiles
        ? {
            entry: entryFiles,
            formats: [format === BUNDLE_FORMAT.ESM ? 'es' : 'cjs'],
          }
        : undefined,

      minify: environment.variables.NODE_ENV === 'production',

      outDir: outDir ?? fromWorking(buildDir),

      rollupOptions: {
        external: externals
          ? (name: string) => some(externals.map((v) => (isString(v) ? name === v : v.test(name))))
          : undefined,

        input,

        output:
          platformF === PLATFORM.NODE
            ? {
                chunkFileNames: '[name].js',
                compact: environment.variables.NODE_ENV === 'production',
                entryFileNames: '[name].js',
                exports: 'named',
                format: format === BUNDLE_FORMAT.ESM ? 'esm' : 'cjs',
                interop: 'auto',
                preserveModules: isPreserveModules,
              }
            : undefined,

        plugins: [
          platformF === PLATFORM.NODE && nodeExternals({ exclude: transpiles, include: externals }),

          nodeResolve({ extensions }),
        ],

        treeshake: true,
      },

      sourcemap:
        sourcemap === BUNDLE_SOURCEMAP.INLINE
          ? 'inline'
          : sourcemap === BUNDLE_SOURCEMAP.OUTPUT
            ? true
            : undefined,

      watch:
        environment.variables.NODE_ENV === 'development'
          ? { include: [...(watch ?? []), ...(input ?? [])] }
          : undefined,
    },

    customLogger,

    define: {
      ...define,
      ...getEnvironmentVariables({ envPrefix: filterNil([envPrefix].flat()), isPrefix: true }),
    },

    envPrefix,

    esbuild: {
      loader: 'tsx',
    },

    mode: environment.variables.NODE_ENV,

    optimizeDeps: {
      entries: input,

      esbuildOptions: {
        define,

        format: format === BUNDLE_FORMAT.ESM ? 'esm' : 'cjs',

        keepNames: true,

        loader: { '.js': 'tsx' },

        mainFields,

        minify: environment.variables.NODE_ENV === 'production',

        platform: platformF === PLATFORM.NODE ? 'node' : undefined,

        plugins: filterNil([
          {
            name: 'js-to-jsx',
            setup(build) {
              build.onLoad({ filter: /node_modules\/.*\.(js|ts)x?$/ }, (args) => {
                let contents = readFileSync(args.path, 'utf8');
                /@flow\b/.test(contents) && (contents = flowRemoveTypes(contents).toString());
                return { contents, loader: 'tsx' };
              });
            },
          } as EsbuildPlugin,

          esbuildPluginTsc({ tsconfigPath: tsconfigDir }),

          esbuildDecorators({ force: true, tsconfig: tsconfigDir, tsx: true }),

          transpileModulesF?.length && esbuildCommonjs(transpileModulesF),

          esbuildPluginExcludeVendorFromSourceMap(),

          externals?.length &&
            nodeExternalsPlugin({
              allowList: transpiles,
              forceExternalList: externals,
              packagePath: rootDirs?.map((path) => joinPaths([path, 'package.json'])),
            }),
        ]) as Array<EsbuildPlugin>,

        resolveExtensions: extensions,

        target: platformF === PLATFORM.NODE ? 'node20' : undefined,

        tsconfig: tsconfigDir,
      },

      force: true,

      include: transpileModulesF,
    },

    plugins: filterNil([
      // input && vitePluginFullReload(input),

      provide && inject(provide),

      platformF === PLATFORM.WEB && vike(),

      // platformF === PLATFORM.NODE && nodePolyfills(),

      babel &&
        babelPlugin({
          babelHelpers: 'runtime',
          compact: environment.variables.NODE_ENV === 'production',
          minified: environment.variables.NODE_ENV === 'production',
          plugins: babel.plugins,
          presets: babel.presets,
          skipPreflightCheck: true,
        } as RollupBabelInputPluginOptions),

      commonjsDeps && cjsInterop({ dependencies: commonjsDeps }),

      serverExtension && vitePluginIsomorphicImport(serverExtension),

      ...(([PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<string>).includes(
        platformF ?? '',
      )
        ? [react()]
        : []),

      viteCommonjs() as Plugin,
    ]),

    publicDir: environment.variables.NODE_ENV === 'production' ? assetsDir : publicPathname,

    resolve: {
      alias: [
        ...(aliases?.map(({ from, to }) => ({
          find: from,
          replacement: to,
        })) ?? []),

        ...reduce(
          getTsconfig(tsconfigDir)?.config?.compilerOptions?.paths,
          (result, v, k) => [
            ...result,
            { find: k.replaceAll('*', ''), replacement: fromRoot(v[0].replaceAll('*', '')) },
          ],
          [] as Array<Alias>,
        ),
      ],

      dedupe,

      extensions,

      preserveSymlinks: true,
    },
    root: fromWorking(),

    server: {
      fs: {
        allow: [searchForWorkspaceRoot(fromRoot()), fromRoot('node_modules')],
      },

      // hmr: {
      //   protocol: 'wss',
      // },

      host: true,

      middlewareMode: appType !== APP_TYPE.TOOL,
    },

    ssr: { noExternal: transpiles },
  };

  if (server?.certificate && config.server) {
    const { certificateDir, privateKeyFilename, publicKeyFilename } = server.certificate;
    config.server.https = {
      cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
      key: readFileSync(joinPaths([certificateDir, privateKeyFilename])),
    };
  }

  return config;
};
