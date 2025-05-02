// import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { PACKAGE_PREFIXES } from '@lib/config/file/file.constants';
import { _plugins } from '@lib/config/node/bundle/_plugins';
import { BUNDLE_FORMAT } from '@lib/config/node/bundle/bundle.constants';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { lintCommand } from '@lib/config/node/lint/lint';
import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { getEnvironmentVariables } from '@lib/shared/core/utils/getEnvironmentVariables/getEnvironmentVariables';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type PlatformModel } from '@lib/shared/platform/platform.models';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { type RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel as babelPlugin } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
// import circularDependencyPlugin from 'vite-plugin-circular-dependency';
// import { VitePluginNode } from 'vite-plugin-node';
import react from '@vitejs/plugin-react-swc';
import { type BuildOptions } from 'esbuild';
import { existsSync } from 'fs';
import { getTsconfig } from 'get-tsconfig';
import isString from 'lodash/isString';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import { nodeExternals } from 'rollup-plugin-node-externals';
// import { visualizer } from 'rollup-plugin-visualizer';
import { type Alias, createLogger, type Logger, type Plugin } from 'vite';
import { checker } from 'vite-plugin-checker';

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
  assetsPathname,
  babel,
  buildDir,
  define,
  entryFiles,
  envPrefix,
  extensions,
  externals,
  format = BUNDLE_FORMAT.ESM,
  isPreserveModules = false,
  isTranspileProject = false,
  logSuppressPatterns,
  mainFields,
  outputPathname,
  provide,
  publicDir,
  rootDirs,
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

  const config: _BundleConfigModel = {
    build: {
      assetsDir: publicDir,

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

      minify: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION,

      outDir: outputPathname ?? fromWorking(buildDir),

      rollupOptions: {
        ...(entryFiles ? { input: entryFiles } : {}),

        external: externals
          ? (name: string) => some(externals.map((v) => (isString(v) ? name === v : v.test(name))))
          : undefined,

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
          externals && nodeExternals({ exclude: transpileAll, include: externals }),

          resolve({
            // browser: true,
            // modulePaths: rootDirs.map((root) =>
            //   joinPaths([root, pacakgeManagerConfig.params().modulesDir]),
            // ),
            // modulesOnly: true,
          }),
        ],
      },

      watch:
        process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT && watch ? { include: watch } : undefined,
    },

    customLogger,

    define,

    envPrefix,

    esbuild: {
      // exclude: [],
      // include: /.*\.[tj]sx?$/,
      loader: 'tsx',
      // sourcemap: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? undefined : 'linked',
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

        nodePaths: rootDirs.map((root) =>
          joinPaths([root, pacakgeManagerConfig.params().modulesDir]),
        ),

        platform: process.env.ENV_PLATFORM === PLATFORM.NODE ? 'node' : undefined,

        plugins: _plugins({
          externals,
          format,
          rootDirs,
          transpileModules,
          transpilePatterns: transpilePatternsF,
        }) as Array<never>,

        resolveExtensions: extensions,

        target: process.env.ENV_PLATFORM === PLATFORM.NODE ? 'node20' : undefined,

        tsconfig: tsconfigDir,
      },

      force: true,

      include: transpileModules,
    },

    plugins: filterNil([
      serverExtension && vitePluginIsomorphicImport(serverExtension),

      // circularDependencyPlugin({}),

      checker({
        eslint: {
          lintCommand: lintCommand(),
          useFlatConfig: true,
        },
        root: fromWorking(),
        typescript: { tsconfigPath: tsconfigDir },
      }),

      provide && inject(provide),

      ...(([PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<PlatformModel>).includes(
        process.env.ENV_PLATFORM,
      )
        ? [react({ tsDecorators: true })]
        : []),

      babel &&
        babelPlugin({
          babelHelpers: 'runtime',
          compact: process.env.NODE_ENV === 'production',
          minified: process.env.NODE_ENV === 'production',
          plugins: babel.plugins,
          presets: babel.presets,
          skipPreflightCheck: true,
        } as RollupBabelInputPluginOptions),

      viteCommonjs(),

      // process.env.NODE_ENV === ENVIRONMENT.PRODUCTION && visualizer(),
    ]),

    publicDir: process.env.NODE_ENV === 'production' ? publicDir : assetsPathname,

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

      preserveSymlinks: true,
    },

    root: fromWorking(),

    // server: {
    //   fs: {
    //     allow: [searchForWorkspaceRoot(fromRoot()), fromModules()],
    //   },
    // },

    ssr: { noExternal: transpileAll },
  };

  const defineF = {
    ...config.define,
    ...getEnvironmentVariables({ envPrefix: config.envPrefix, isPrefix: true }),
  };

  config.define = defineF;
  config.optimizeDeps?.esbuildOptions && (config.optimizeDeps.esbuildOptions.define = defineF);

  config.esbuildConfig = merge([
    {
      bundle: !isPreserveModules,
      entryPoints: entryFiles,
      outExtension: format === BUNDLE_FORMAT.ESM ? { '.js': '.mjs' } : undefined,
      outdir: config.build?.outDir,
    },
    config.optimizeDeps?.esbuildOptions as Partial<BuildOptions>,
  ]);

  return config;
};
