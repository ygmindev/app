import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import configBase from '@lib/config/node/bundle/bundle.native';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<BundleConfigModel, _BundleConfigModel>({
  ...configBase,
});

export default config;
