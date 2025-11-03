import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import { BUNDLE_FORMAT } from '@lib/config/node/bundle/bundle.constants';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { lintCommand } from '@lib/config/node/lint/lint';
import { type PartialModel } from '@lib/shared/core/core.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { getEnvironmentVariables } from '@lib/shared/core/utils/getEnvironmentVariables/getEnvironmentVariables';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { type RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel as babelPlugin } from '@rollup/plugin-babel';
import { default as rollupPluginCommonjs } from '@rollup/plugin-commonjs';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
import { default as rollupPluginTerser } from '@rollup/plugin-terser';
import { default as rollupPluginTypescript } from '@rollup/plugin-typescript';
import react from '@vitejs/plugin-react-swc';
import { type BuildOptions, type Plugin as EsbuildPlugin } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import esbuildPluginTsc from 'esbuild-plugin-tsc';
import flowRemoveTypes from 'flow-remove-types';
import { existsSync, readFileSync } from 'fs';
import { getTsconfig } from 'get-tsconfig';
import isString from 'lodash/isString';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import { sep } from 'path';
import posix from 'path/posix';
import { type RollupOptions } from 'rollup';
import esbuildPlugin from 'rollup-plugin-esbuild';
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
import { checker } from 'vite-plugin-checker';
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
  isSourcemap = false,
  isTranspileProject = false,
  logSuppressPatterns,
  mainFields,
  outputPathname,
  provide,
  publicPathname,
  rootDirs,
  server,
  serverExtension,
  transpileModules,
  transpilePatterns,
  typescript,
  watch,
}: BundleConfigModel): _BundleConfigModel => {
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

  const transpilePatternsF = [
    ...(transpilePatterns ?? []),
    ...(isTranspileProject ? PACKAGE_PREFIXES.map((v) => new RegExp(`@${v}/*`)) : []),
  ];
  const transpileAll = [...(transpileModules ?? []), ...(transpilePatternsF ?? [])];

  const rollupOptions: RollupOptions = {
    external: externals
      ? (name: string) => some(externals.map((v) => (isString(v) ? name === v : v.test(name))))
      : undefined,

    plugins: [
      process.env.ENV_PLATFORM === PLATFORM.NODE &&
        nodeExternals({ exclude: transpileAll, include: externals }),

      resolve({ extensions }),
    ],
  };

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

      lib: format === BUNDLE_FORMAT.CJS ? { entry: 'src/index.ts', formats: ['cjs'] } : undefined,

      minify: process.env.NODE_ENV === 'production',

      outDir: outputPathname ?? fromWorking(buildDir),

      rollupOptions,

      sourcemap: isSourcemap,

      watch: process.env.NODE_ENV === 'development' && watch ? { include: watch } : undefined,
    },

    customLogger,

    define,

    envPrefix,

    esbuild: {
      loader: 'tsx',

      sourcemap: isSourcemap,
    },

    mode: process.env.NODE_ENV,

    optimizeDeps: {
      esbuildOptions: {
        define,

        format: format === BUNDLE_FORMAT.ESM ? 'esm' : 'cjs',

        keepNames: true,

        loader: { '.js': 'tsx' },

        mainFields,

        minify: process.env.NODE_ENV === 'production',

        platform: process.env.ENV_PLATFORM === PLATFORM.NODE ? 'node' : undefined,

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

          esbuildPluginTsc({ tsconfigPath: fromWorking('tsconfig.json') }),

          esbuildDecorators({ force: true, tsconfig: fromWorking('tsconfig.json'), tsx: true }),

          transpileModules?.length && esbuildCommonjs(transpileModules),

          esbuildPluginExcludeVendorFromSourceMap(),

          externals?.length &&
            nodeExternalsPlugin({
              allowList: [...(transpileModules ?? []), ...(transpilePatternsF ?? [])],
              forceExternalList: externals,
              packagePath: rootDirs?.map((path) => joinPaths([path, 'package.json'])),
            }),
        ]) as Array<EsbuildPlugin>,

        resolveExtensions: extensions,

        sourcemap: isSourcemap ? true : undefined,

        target: process.env.ENV_PLATFORM === PLATFORM.NODE ? 'node20' : undefined,

        tsconfig: tsconfigDir,
      },

      force: true,

      include: transpileModules,
    },

    plugins: filterNil([
      ...filterNil([
        provide && inject(provide),

        server?.isWebServer && vike(),

        babel &&
          babelPlugin({
            babelHelpers: 'runtime',
            compact: process.env.NODE_ENV === 'production',
            minified: process.env.NODE_ENV === 'production',
            plugins: babel.plugins,
            presets: babel.presets,
            skipPreflightCheck: true,
          } as RollupBabelInputPluginOptions),

        commonjsDeps && cjsInterop({ dependencies: commonjsDeps }),
      ]),

      serverExtension && vitePluginIsomorphicImport(serverExtension),

      checker({
        eslint: {
          lintCommand: lintCommand(),
          useFlatConfig: true,
        },
        root: fromWorking(),
        typescript: { tsconfigPath: tsconfigDir },
      }),

      ...(([PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<string>).includes(
        process.env.ENV_PLATFORM,
      )
        ? [react({ plugins: [['swc-plugin-add-display-name', {}]], tsDecorators: true })]
        : []),

      viteCommonjs() as Plugin,
    ]),

    publicDir: process.env.NODE_ENV === 'production' ? assetsDir : publicPathname,

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

      // preserveSymlinks: true,
      // TODO: enabling this causes https://vike.dev/client-runtime-duplicated
    },

    root: fromWorking(),

    server: {
      fs: {
        allow: [searchForWorkspaceRoot(fromRoot()), fromModules()],
      },
    },

    ssr: { noExternal: transpileAll },
  };

  if (server && config.server) {
    config.server = {
      ...config.server,

      ...((process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
      !process.env.NODE_RUNTIME
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

  const defineF = {
    ...config.define,
    ...getEnvironmentVariables({ envPrefix: filterNil([config.envPrefix].flat()), isPrefix: true }),
  };

  config.define = defineF;
  config.optimizeDeps?.esbuildOptions && (config.optimizeDeps.esbuildOptions.define = defineF);

  config.esbuildConfig = merge(
    [
      {
        bundle: !isPreserveModules,
        entryPoints: entryFiles,
        outExtension: format === BUNDLE_FORMAT.ESM ? { '.js': '.mjs' } : undefined,
        outdir: config.build?.outDir,
        plugins: filterNil([aliases && esbuildPluginResolveAlias(aliases)]),
      },
      config.optimizeDeps?.esbuildOptions as PartialModel<BuildOptions>,
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

  config.rollupConfig = merge(
    [
      {
        ...(entryFiles ? { input: entryFiles } : {}),

        output:
          process.env.ENV_PLATFORM === PLATFORM.NODE
            ? {
                chunkFileNames: '[name].js',
                compact: process.env.NODE_ENV === 'production',
                entryFileNames: '[name].js',
                exports: 'named',
                format: format === BUNDLE_FORMAT.ESM ? 'esm' : 'cjs',
                interop: 'auto',
                preserveModules: isPreserveModules,
              }
            : undefined,

        plugins: [
          rollupPluginTypescript({
            exclude,
            include,
            noEmitOnError: true,
            tsconfig: tsconfigDir,
          }),

          rollupPluginTerser({
            module: format === BUNDLE_FORMAT.ESM,
            sourceMap: isSourcemap,
            toplevel: format === BUNDLE_FORMAT.CJS,
          }),

          // rollupPluginEslint({
          //   fix: true,
          //   overrideConfigFile: fromDist(lintConfig.params().configFilename),
          // }),

          rollupPluginCommonjs(config.build?.commonjsOptions),

          esbuildPlugin({
            define: config.esbuildConfig?.define,
            format: config.esbuildConfig?.format,
            keepNames: config.esbuildConfig?.keepNames,
            loaders: config.esbuildConfig?.loader,
            minify: config.esbuildConfig?.minify,
            platform: config.esbuildConfig?.platform,
            target: config.esbuildConfig?.target,
            tsconfig: config.esbuildConfig?.tsconfig,
          }),
        ],
      },

      rollupOptions,
    ],

    MERGE_STRATEGY.DEEP_APPEND,
  );

  return config;
};
