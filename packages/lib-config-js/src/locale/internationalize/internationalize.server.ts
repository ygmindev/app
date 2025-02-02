import { fromAssets } from '@lib/backend/file/utils/fromAssets/fromAssets';
import configBase from '@lib/config/locale/internationalize/internationalize.frontend';
import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import Backend from 'i18next-fs-backend';

export const config = defineConfig<InternationalizeConfigModel, _InternationalizeConfigModel>({
  ...configBase,

  overrides: () => [
    {
      isPreload: true,

      localePath: fromAssets(),

      modules: [Backend],
    },
  ],
});

export default config;
