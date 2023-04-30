import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = {
  babelConfig: {
    compact: process.env.NODE_ENV === 'production',
    plugins: [
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ],
    presets: ['@babel/preset-env', '@babel/preset-typescript'],
  },

  define: {
    __DEV__: `${process.env.NODE_ENV === 'development'}`,
  },

  envPrefix: ['ENV_', 'NODE_'],

  extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.mjs', '.cjs'],

  mainFields: ['module', 'main'],

  modulePaths: [fromModules()],

  platform: PLATFORM.BASE,

  // TODO: watch is not really working
  watch: [
    fromPackages('asset-static/src/**/*'),
    fromPackages('lib-config/src/**/*'),
    fromPackages('lib-shared/src/**/*'),
    fromWorking('src/**/*'),
  ],
};
