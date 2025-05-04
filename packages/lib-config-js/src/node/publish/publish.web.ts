import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import configBase from '@lib/config/node/publish/publish.base';
import {
  type _PublishConfigModel,
  type PublishConfigModel,
} from '@lib/config/node/publish/publish.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<PublishConfigModel, _PublishConfigModel>({
  ...configBase,

  overrides: () => [
    {
      assetsPathname: fromWorking(BUILD_DIR, 'client'),
    },
  ],
});

export default config;
