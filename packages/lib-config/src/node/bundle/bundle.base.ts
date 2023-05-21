import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

const bundleConfig: BundleConfigModel = async () => ({
  envPrefix: ['ENV_', 'NODE_ENV'],

  extensions: ['.tsx', '.ts', '.jsx', '.js'],

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
});

export default bundleConfig;
