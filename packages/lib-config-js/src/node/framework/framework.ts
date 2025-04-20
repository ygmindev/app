import { _framework } from '@lib/config/node/framework/_framework';
import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<FrameworkConfigModel, _FrameworkConfigModel>({
  config: _framework,

  params: () => ({
    routes: [],
  }),
});

export default config;
