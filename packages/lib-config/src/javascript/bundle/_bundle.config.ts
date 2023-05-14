import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _BabelConfigModel } from '@lib/config/javascript/babel/_babel.models';
import type {
  _BundleConfigModel,
  _BundleConfigParamsModel,
} from '@lib/config/javascript/bundle/_bundle.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import type { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import { LINT_COMMAND } from '@tool/task/node/templates/lint/lint';
import react from '@vitejs/plugin-react';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { filelocPlugin } from 'esbuild-plugin-fileloc';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
import { searchForWorkspaceRoot } from 'vite';
import { checker } from 'vite-plugin-checker';
import circleDependency from 'vite-plugin-circular-dependency';
import tsconfigPaths from 'vite-tsconfig-paths';

export const _bundleConfig =
  ({
    aliases,
    define,
    entry,
    envPrefix,
    extensions,
    externals,
    mainFields,
    modulePaths,
    platform,
    provide,
    watch,
  }: _BundleConfigParamsModel): _BundleConfigModel =>
  async () => {
    const { babelConfig } = await importFromEnv<_BabelConfigModel, 'babelConfig'>(
      '@lib/config/javascript/babel/configs/babel.config',
    );
    return {
      build: {
        commonjsOptions: {
          include: externals,
          requireReturnsDefault: 'auto',
          transformMixedEsModules: true,
        },
        watch: watch ? { include: watch } : undefined,
        ...(entry ? { rollupOptions: { input: entry } } : {}),
      },

      define,

      envPrefix,

      esbuild: {
        sourcemap: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? undefined : 'inline',
      },

      mode: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? 'production' : 'development',

      optimizeDeps: {
        esbuildOptions: {
          define,

          keepNames: true,

          mainFields,

          target: process.env.PLATFORM === PLATFORM.NODE ? 'node18' : 'esnext',

          minify: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION,

          nodePaths: modulePaths,

          plugins: [
            esbuildDecorators({ tsconfig: fromWorking('tsconfig.json') }),

            externals && esbuildCommonjs(externals),

            externals && nodeExternalsPlugin({ packagePath: fromRoot('package.json') }),

            platform === PLATFORM.NODE && filelocPlugin(),
          ].filter(Boolean),

          resolveExtensions: extensions,

          sourcemap: process.env.NODE_ENV === ENVIRONMENT.PRODUCTION ? undefined : 'inline',

          tsconfig: fromWorking('tsconfig.json'),
        },

        include: externals,
      },

      plugins: [
        tsconfigPaths({ projects: [fromRoot('tsconfig.json')] }),

        checker({
          eslint: { lintCommand: LINT_COMMAND },
          typescript: { tsconfigPath: fromWorking('tsconfig.json') },
        }),

        ([PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<PlatformModel>).includes(
          platform,
        ) && react(),

        provide && inject(provide),

        viteCommonjs(),

        babelConfig && babel(babelConfig as RollupBabelInputPluginOptions),

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
  };
