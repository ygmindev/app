import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _plugins } from '@lib/config/node/bundle/_plugins';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { lintCommand } from '@lib/config/node/lint/lint';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { getEnvironmentVariables } from '@lib/shared/core/utils/getEnvironmentVariables/getEnvironmentVariables';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type PlatformModel } from '@lib/shared/platform/platform.models';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { type RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel as babelPlugin } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react-swc';
import { existsSync } from 'fs';
import { getTsconfig } from 'get-tsconfig';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import { visualizer } from 'rollup-plugin-visualizer';
import { type Alias, createLogger, type Logger, type Plugin } from 'vite';
import { checker } from 'vite-plugin-checker';
import circularDependencyPlugin from 'vite-plugin-circular-dependency';

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
  babel,
  buildDir,
  define,
  entryFilename,
  envPrefix,
  extensions,
  externals,
  logSuppressPatterns,
  mainFields,
  provide,
  publicDir,
  rootDirs,
  serverExtension,
  transpiles,
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
  const config: _BundleConfigModel = {
    build: {
      assetsDir: joinPaths([fromWorking(), publicDir]),

      commonjsOptions: {
        defaultIsModuleExports: true,
        esmExternals: true,
        requireReturnsDefault: 'auto',
        transformMixedEsModules: true,
      },

      emptyOutDir: true,

      minify: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION,

      outDir: joinPaths([fromWorking(), buildDir]),

      rollupOptions: {
        ...(entryFilename ? { input: entryFilename } : {}),

        external: externals,

        output: {
          chunkFileNames: '[name].js',
          entryFileNames: '[name].js',
          format: 'cjs',
          interop: 'auto',
          preserveModules: true,
        },

        // plugins: [resolve({ modulesOnly: true }), flowPlugin()],
        plugins: [
          resolve({ modulesOnly: true }),
          // babel &&
          //   babelPlugin({
          //     babelHelpers: 'runtime',
          //     compact: process.env.NODE_ENV === 'production',
          //     minified: process.env.NODE_ENV === 'production',
          //     plugins: babel.plugins,
          //     presets: babel.presets,
          //     skipPreflightCheck: true,
          //   } as RollupBabelInputPluginOptions),
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

    mode: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? 'production' : 'development',

    optimizeDeps: {
      esbuildOptions: {
        define,

        keepNames: true,

        loader: { '.js': 'tsx' },

        mainFields,

        minify: process.env.NODE_ENV === 'production',

        nodePaths: rootDirs.map((root) => joinPaths([root, 'node_modules'])),

        plugins: _plugins({ rootDirs, transpiles }),

        resolveExtensions: extensions,

        target: process.env.ENV_PLATFORM === PLATFORM.NODE ? 'node18' : undefined,

        tsconfig: tsconfigDir,
      },

      force: true,

      include: transpiles,
    },

    plugins: filterNil([
      serverExtension && vitePluginIsomorphicImport(serverExtension),

      circularDependencyPlugin({}) as Plugin,

      checker({
        eslint: { lintCommand: lintCommand() },
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

      viteCommonjs() as Plugin,

      process.env.NODE_ENV === ENVIRONMENT.PRODUCTION && visualizer(),
    ]),

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

    ssr: { noExternal: transpiles },
  };

  const defineF = {
    ...config.define,
    ...getEnvironmentVariables({ envPrefix: config.envPrefix, isPrefix: true }),
  };

  config.define = defineF;
  config.optimizeDeps?.esbuildOptions && (config.optimizeDeps.esbuildOptions.define = defineF);

  return config;
};
