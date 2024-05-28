import configBase from '@lib/config/locale/internationalize/internationalize.base';
import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { APP_URI } from '@lib/shared/http/http.constants';

const config = defineConfig<InternationalizeConfigModel, _InternationalizeConfigModel>({
  ...configBase,

  overrides: () => [
    {
      isPreload: false,

      localePath: APP_URI,
    },
  ],
});

export default config;
