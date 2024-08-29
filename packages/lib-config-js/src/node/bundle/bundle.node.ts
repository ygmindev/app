import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import configBase from '@lib/config/node/bundle/bundle.base';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<BundleConfigModel, _BundleConfigModel>({
  ...configBase,

  overrides: () => [
    {
      envPrefix: ['SERVER_'],

      watch: [fromPackages('lib-backend-js/src/**/*')],
    },
  ],
});

export default config;
