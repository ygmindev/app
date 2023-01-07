import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _BundleConfigParamsModel } from '@lib/config/javascript/bundle/_bundle.models';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import copyPlugin from 'rollup-plugin-copy';
import type { PluginOption, UserConfig } from 'vite';
import { searchForWorkspaceRoot } from 'vite';
import type { Plugin } from 'vite/node_modules/esbuild/lib/main';
import tsconfigPaths from 'vite-tsconfig-paths';

export const _bundleConfig = ({
  aliases,
  copy,
  define,
  entry,
  envPrefix,
  extensions,
  externals,
  mode,
}: _BundleConfigParamsModel): UserConfig => ({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    ...(entry ? { rollupOptions: { input: entry } } : {}),
  },

  define,

  envPrefix,

  mode,

  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'tsx' },
      plugins: [externals && esbuildCommonjs(externals)].filter(Boolean) as Array<Plugin>,
      resolveExtensions: extensions,
    },
    include: externals,
  },

  plugins: [
    viteCommonjs(),

    tsconfigPaths({ projects: [fromRoot('tsconfig.json')] }),

    copy &&
      copyPlugin({
        hook: 'buildStart',
        targets: copy.map(({ from, to }) => ({ dest: to, src: from })),
      }),
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
