import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import type { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import resolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react-swc';
import { getTsconfig } from 'get-tsconfig';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
// import nodePolyfills from 'rollup-plugin-polyfill-node';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
import { searchForWorkspaceRoot } from 'vite';
import { checker } from 'vite-plugin-checker';
import circleDependency from 'vite-plugin-circular-dependency';
import tsconfigPaths from 'vite-tsconfig-paths';

import { fromModules } from '#lib-backend/file/utils/fromModules/fromModules';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { _plugins } from '#lib-config/node/bundle/_plugins';
import type { _BundleConfigModel, BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import { lintCommand } from '#lib-config/node/lint/lint';
import { PLATFORM } from '#lib-platform/core/core.constants';
import type { PlatformModel } from '#lib-platform/core/core.models';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';

export const _bundle = ({
  aliases,
  babelConfig,
  define,
  entry,
  envPrefix,
  extensions,
  mainFields,
  modulePaths,
  outDir,
  platform,
  provide,
  transpiles,
  tsconfigPath,
  watch,
}: ReturnTypeModel<BundleConfigModel>): ReturnTypeModel<_BundleConfigModel> => {
  const isReact = ([PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<PlatformModel>).includes(
    platform,
  );
  const babelConfigF = babelConfig && babelConfig();
  const config: ReturnTypeModel<_BundleConfigModel> = {
    build: {
      commonjsOptions: {
        defaultIsModuleExports: true,
        esmExternals: true,
        requireReturnsDefault: 'auto',
        transformMixedEsModules: true,
      },

      outDir,

      rollupOptions: {
        ...(entry ? { input: entry } : {}),

        plugins: [resolve()],
      },
      watch:
        process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT && watch ? { include: watch } : undefined,
    },

    define,

    envPrefix,

    esbuild: {
      sourcemap: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? undefined : true,
    },

    mode: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? 'production' : 'development',

    optimizeDeps: {
      esbuildOptions: {
        define,

        keepNames: true,

        mainFields,

        minify: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION,

        nodePaths: modulePaths,

        plugins: _plugins({ platform, transpiles }),

        resolveExtensions: extensions,

        sourcemap: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? undefined : 'inline',

        target: process.env.PLATFORM === PLATFORM.NODE ? 'node18' : undefined,

        tsconfig: tsconfigPath,
      },

      include: transpiles,
    },

    plugins: [
      tsconfigPath && tsconfigPaths({ projects: [tsconfigPath] }),

      checker({
        eslint: { lintCommand: lintCommand() },
        typescript: { tsconfigPath },
      }),

      isReact && react(),

      provide && inject(provide),

      viteCommonjs(),

      babelConfigF &&
        babel({
          ...babelConfigF,
          babelHelpers: 'runtime',
          skipPreflightCheck: true,
        } as RollupBabelInputPluginOptions),

      process.env.NODE_ENV === ENVIRONMENT.PRODUCTION && visualizer(),

      circleDependency({}),
    ].filter(Boolean) as Array<PluginOption>,

    resolve: {
      alias: {
        ...aliases,
        ...(tsconfigPath
          ? reduce(
              getTsconfig(tsconfigPath)?.config?.compilerOptions?.paths,
              (result, v, k) => ({
                ...result,
                [k.replaceAll('*', '')]: fromRoot(v[0].replaceAll('*', '')),
              }),
              {},
            )
          : {}),
      },

      extensions,
    },

    root: fromWorking(),

    server: { fs: { allow: [searchForWorkspaceRoot(fromRoot()), fromModules()] } },

    ssr: {
      noExternal: transpiles,
    },
  };

  const defineF = {
    ...config.define,
    ...reduce(
      process.env,
      (result, v, k) =>
        some(config.envPrefix, (prefix) => k.startsWith(prefix))
          ? { ...result, [`process.env.${k}`]: JSON.stringify(v) }
          : result,
      {},
    ),
  };

  config.define = defineF;
  config.optimizeDeps?.esbuildOptions && (config.optimizeDeps.esbuildOptions.define = defineF);

  return config;
};
