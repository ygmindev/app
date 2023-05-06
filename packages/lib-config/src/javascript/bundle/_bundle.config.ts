import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type {
  _BundleConfigModel,
  _BundleConfigParamsModel,
} from '@lib/config/javascript/bundle/_bundle.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import type { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import { LINT_COMMAND } from '@tool/task/node/templates/lint/lint';
import react from '@vitejs/plugin-react';
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
    babelConfig,
    define,
    entry,
    envPrefix,
    extensions,
    externals,
    mainFields,
    platform,
    provide,
    watch,
  }: _BundleConfigParamsModel): _BundleConfigModel =>
  async () => ({
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
        keepNames: true,

        mainFields,

        plugins: [
          esbuildDecorators({ tsconfig: fromWorking('tsconfig.json') }),

          externals && esbuildCommonjs(externals),

          platform === PLATFORM.NODE && filelocPlugin(),
        ].filter(Boolean),

        resolveExtensions: extensions,

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

      ([PLATFORM.WEB, PLATFORM.ANDROID, PLATFORM.IOS] as Array<PlatformModel>).includes(platform) &&
        react(),

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
  });
