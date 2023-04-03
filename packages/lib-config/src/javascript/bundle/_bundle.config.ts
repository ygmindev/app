import { esbuildDecorators } from '@anatine/esbuild-decorators';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _BundleConfigParamsModel } from '@lib/config/javascript/bundle/_bundle.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import type { RollupBabelInputPluginOptions } from '@rollup/plugin-babel';
import { babel } from '@rollup/plugin-babel';
import inject from '@rollup/plugin-inject';
import { LINT_COMMAND } from '@tool/task/node/templates/lint/lint';
import { filelocPlugin } from 'esbuild-plugin-fileloc';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption, UserConfig } from 'vite';
import { searchForWorkspaceRoot } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export const _bundleConfig = ({
  aliases,
  babelConfig,
  define,
  entry,
  envPrefix,
  extensions,
  externals,
  mode,
  platform,
  provide,
  watch,
}: _BundleConfigParamsModel): UserConfig => ({
  build: {
    commonjsOptions: {
      requireReturnsDefault: 'auto',
      transformMixedEsModules: true,
    },
    watch: watch ? { include: watch } : undefined,
    ...(entry ? { rollupOptions: { input: entry } } : {}),
  },

  define,

  envPrefix,

  esbuild: {
    sourcemap: process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT ? 'inline' : undefined,
  },

  mode,

  optimizeDeps: {
    esbuildOptions: {
      keepNames: true,
      loader: { '.js': 'tsx' },
      plugins: [
        esbuildDecorators({ tsconfig: fromWorking('tsconfig.json') }),

        externals && esbuildCommonjs(externals),

        platform === PLATFORM.NODE && filelocPlugin(),
      ].filter(Boolean),

      resolveExtensions: extensions,
    },
    include: externals,
  },

  plugins: [
    tsconfigPaths({ projects: [fromRoot('tsconfig.json')] }),

    checker({
      eslint: { lintCommand: LINT_COMMAND },
      typescript: { tsconfigPath: fromWorking('tsconfig.json') },
    }),

    viteCommonjs(),

    provide && inject(provide),

    babelConfig && babel(babelConfig as RollupBabelInputPluginOptions),

    process.env.NODE_ENV === ENVIRONMENT.PRODUCTION && visualizer(),
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
