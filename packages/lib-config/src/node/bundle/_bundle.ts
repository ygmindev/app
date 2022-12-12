import type { _BundleConfigParamsModel } from '@lib/config/node/bundle/_bundle.models';
import { BUNDLE_TARGET } from '@lib/config/node/bundle/bundle.constants';
import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import type { Plugin } from 'esbuild';
import copyPlugin from 'rollup-plugin-copy';
import type { UserConfig } from 'vite';

export const _bundleConfig = ({
  aliases,
  copy,
  define,
  entry,
  envPrefix,
  extensions,
  externals,
  mode,
  target,
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
    target === BUNDLE_TARGET.BROWSER && vanillaExtractPlugin(),
    copy &&
      copyPlugin({
        hook: 'buildStart',
        targets: copy.map(({ from, to }) => ({ dest: to, src: from })),
      }),
  ].filter(Boolean),

  resolve: {
    alias: aliases,

    extensions,
  },

  ssr: {
    noExternal: externals,
  },
});
