import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import { BUNDLE_FORMAT, BUNDLE_SOURCEMAP } from '@lib/config/node/bundle/bundle.constants';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
// import { lintCommand } from '@lib/config/node/lint/lint';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { getEnvironmentVariables } from '@lib/shared/core/utils/getEnvironmentVariables/getEnvironmentVariables';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { type RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel as babelPlugin } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react-swc';
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
  type WatchOptions,
} from 'vite';
// import { checker } from 'vite-plugin-checker';
import { cjsInterop } from 'vite-plugin-cjs-interop';

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
  assetsDir,
  babel,
  buildDir,
  commonjsDeps,
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

  const input = entryFiles
    ? isString(entryFiles)
      ? [entryFiles]
      : isArray(entryFiles)
        ? entryFiles
        : Object.values(entryFiles)
    : undefined;

  const config: _BundleConfigModel = {
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
          environment.variables.ENV_PLATFORM === PLATFORM.NODE
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
          environment.variables.ENV_PLATFORM === PLATFORM.NODE &&
            nodeExternals({ exclude: transpiles, include: externals }),

          resolve({ extensions }),
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

        platform: environment.variables.ENV_PLATFORM === PLATFORM.NODE ? 'node' : undefined,

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

          transpileModules?.length && esbuildCommonjs(transpileModules),

          esbuildPluginExcludeVendorFromSourceMap(),

          externals?.length &&
            nodeExternalsPlugin({
              allowList: transpiles,
              forceExternalList: externals,
              packagePath: rootDirs?.map((path) => joinPaths([path, 'package.json'])),
            }),
        ]) as Array<EsbuildPlugin>,

        resolveExtensions: extensions,

        target: environment.variables.ENV_PLATFORM === PLATFORM.NODE ? 'node20' : undefined,

        tsconfig: tsconfigDir,

        preserveSymlinks: false,
      },

      force: true,

      include: transpileModules,
    },

    plugins: filterNil([
      provide && inject(provide),

      environment.variables.ENV_PLATFORM === PLATFORM.WEB && vike(),

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

      // checker({
      //   eslint: {
      //     lintCommand: lintCommand(),
      //     useFlatConfig: true,
      //   },
      //   root: fromWorking(),
      //   typescript: { tsconfigPath: tsconfigDir },
      // }),

      ...(([PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<string>).includes(
        environment.variables.ENV_PLATFORM ?? '',
      )
        ? [react({ plugins: [['swc-plugin-add-display-name', {}]], tsDecorators: true })]
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

      dedupe: ['react', 'react-dom'],

      extensions,

      preserveSymlinks: false,
    },

    root: fromWorking(),

    server: {
      fs: {
        allow: [searchForWorkspaceRoot(fromRoot()), fromModules()],
      },
    },

    ssr: { noExternal: transpiles },
  };

  if (server && config.server) {
    config.server = {
      ...config.server,

      ...((environment.variables.NODE_ENV === 'development' ||
        environment.variables.NODE_ENV === 'test') &&
      !environment.variables.NODE_RUNTIME
        ? {
            host: true,
            middlewareMode: true,
            watch: (config.build?.watch as WatchOptions) ?? undefined,
          }
        : {}),
    };

    if (server.certificate) {
      const { certificateDir, privateKeyFilename, publicKeyFilename } = server.certificate;
      config.server.https = {
        cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
        key: readFileSync(joinPaths([certificateDir, privateKeyFilename])),
      };
    }
  }

  return config;
};
