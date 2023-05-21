import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { importConfig } from '@lib/config/core/utils/importConfig/importConfig';
import _babelConfig from '@lib/config/node/babel/_babel';
import type { _BundleConfigModel, BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { _plugins } from '@lib/config/node/bundle/_plugins';
import { lintCommand } from '@lib/config/node/lint/lint';
import type { ReturnTypeModel } from '@lib/shared/core/core.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import type { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
import { searchForWorkspaceRoot } from 'vite';
import { checker } from 'vite-plugin-checker';
import circleDependency from 'vite-plugin-circular-dependency';
import tsconfigPaths from 'vite-tsconfig-paths';
import reduce from 'lodash/reduce';
import some from 'lodash/some';
import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';

const _bundleConfig: _BundleConfigModel = async () => {
  const {
    aliases,
    define,
    entry,
    envPrefix,
    extensions,
    externals,
    mainFields,
    modulePaths,
    outDir,
    platform,
    provide,
    watch,
  } = await importConfig<BundleConfigModel>('node/bundle/bundle');
  const babelConfig = await _babelConfig();
  const _isReact = (
    [PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<PlatformModel>
  ).includes(platform);

  const _result: ReturnTypeModel<_BundleConfigModel> = {
    build: {
      commonjsOptions: {
        include: externals,
        requireReturnsDefault: 'auto',
        transformMixedEsModules: true,
      },
      outDir,
      watch:
        process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT && watch ? { include: watch } : undefined,
      ...(entry ? { rollupOptions: { input: entry } } : {}),
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

        plugins: _plugins({ externals, platform }),

        resolveExtensions: extensions,

        sourcemap: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? undefined : 'inline',

        target: process.env.PLATFORM === PLATFORM.NODE ? 'node18' : 'esnext',

        tsconfig: fromWorking('tsconfig.json'),
      },

      include: externals,
    },

    plugins: [
      tsconfigPaths({ projects: [fromRoot('tsconfig.json')] }),

      checker({
        eslint: { lintCommand: lintCommand() },
        typescript: { tsconfigPath: fromWorking('tsconfig.json') },
      }),

      _isReact && react(),

      provide && inject(provide),

      viteCommonjs(),

      babelConfig &&
        babel({
          ...babelConfig,
          babelHelpers: 'runtime',
          skipPreflightCheck: true,
        } as RollupBabelInputPluginOptions),

      process.env.NODE_ENV === ENVIRONMENT.PRODUCTION && visualizer(),

      circleDependency({}),
    ].filter(Boolean) as Array<PluginOption>,

    resolve: {
      alias: aliases,

      extensions,
    },

    root: fromWorking(),

    server: {
      fs: {
        allow: [searchForWorkspaceRoot(fromRoot()), fromModules()],
      },
    },

    ssr: {
      noExternal: externals,
    },
  };

  const _define = {
    ..._result.define,
    ...reduce(
      process.env,
      (result, v, k) =>
        some(_result.envPrefix, (prefix) => k.startsWith(prefix))
          ? { ...result, [`process.env.${k}`]: JSON.stringify(v) }
          : result,
      {},
    ),
  };
``
  _result.define = _define;
  _result.optimizeDeps?.esbuildOptions && (_result.optimizeDeps.esbuildOptions.define = _define);

  return _result;
};

export default _bundleConfig;
