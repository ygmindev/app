import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = {
  define: {
    __DEV__: `${process.env.NODE_ENV === 'development'}`,
  },

  envPrefix: ['ENV_', 'NODE_'],

  extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.mjs', '.cjs'],

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
