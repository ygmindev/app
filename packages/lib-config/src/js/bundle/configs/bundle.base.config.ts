import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import type { BundleConfigParamsModel } from '@lib/config/js/bundle/bundle.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = {
  define: {
    __DEV__: process.env.NODE_ENV === 'development',
  },

  envPrefix: 'APP_',

  extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.mjs', '.cjs'],

  modulePaths: [fromModules()],

  platform: PLATFORM.BASE,
};
