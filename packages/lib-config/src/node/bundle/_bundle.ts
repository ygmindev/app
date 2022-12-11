import type { _BundleConfigParamsModel } from '@lib/config/node/bundle/_bundle.models';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import type { Plugin } from 'esbuild';
import type { UserConfig } from 'vite';

export const _bundleConfig = ({
  aliases,
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

  plugins: [viteCommonjs()],

  resolve: {
    alias: aliases,

    extensions,
  },

  ssr: {
    noExternal: externals,
  },
});
