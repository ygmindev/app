import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { _BundleConfigParamsModel } from '@lib/config/node/bundle/_bundle.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { build } from 'vite';

const bundleConfigParams: _BundleConfigParamsModel = {
  build: {
    command: async (config) => {
      const result = await build(config);
      console.warn(result);
    },
  },

  envPrefix: ['ENV_', 'NODE_'],

  extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '.mjs', '.cjs'],

  mainFields: ['module', 'main'],

  modulePaths: [fromModules()],

  outDir: fromWorking('dist'),

  platform: PLATFORM.BASE,

  // TODO: watch is not really working
  watch: [
    fromPackages('asset-static/src/**/*'),
    fromPackages('lib-config/src/**/*'),
    fromPackages('lib-shared/src/**/*'),
    fromWorking('src/**/*'),
  ],
};

export default bundleConfigParams;
