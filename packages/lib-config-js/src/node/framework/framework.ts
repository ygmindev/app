import { _framework } from '@lib/config/node/framework/_framework';
import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';
// import { onAfterServer } from '@lib/config/node/framework/onAfterServer';
// import { onBeforeClient } from '@lib/config/node/framework/onBeforeClient';
// import { onBeforeServer } from '@lib/config/node/framework/onBeforeServer';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<FrameworkConfigModel, _FrameworkConfigModel>({
  config: _framework,

  params: () => ({
    // onAfterServer,
    // onBeforeClient,
    // onBeforeServer,
  }),
});

export default config;
