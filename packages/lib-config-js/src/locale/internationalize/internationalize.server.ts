import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { PUBLIC_DIR } from '@lib/config/file/file.constants';
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

      localePath: fromStatic(PUBLIC_DIR),

      modules: [Backend],
    },
  ],
});

export default config;
