import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
// import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import configBase from '@lib/config/node/bundle/bundle.base';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<BundleConfigModel, _BundleConfigModel>({
  ...configBase,

  overrides: () => [
    {
      aliases: [{ from: /lodash\/(.*)/, to: 'lodash/$1.js' }],

      // entryFiles: { index: fromWorking('src/index.ts') },
      envPrefix: ['SERVER_'],

      externals: [/node_modules/],

      watch: [fromPackages('lib-backend-js/src/**/*')],
    },
  ],
});

export default config;
