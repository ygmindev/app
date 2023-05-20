import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

const ENV_PREFIX = ['ENV_', 'NODE_'];
const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

const bundleConfig: BundleConfigModel = async () => ({
  define: {
    ...reduce(
      process.env,
      (result, v, k) =>
        some(ENV_PREFIX, (prefix) => k.startsWith(prefix))
          ? { ...result, [`process.env.${k}`]: JSON.stringify(v) }
          : result,
      {},
    ),
  },

  envPrefix: ENV_PREFIX,

  extensions: EXTENSIONS,

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
