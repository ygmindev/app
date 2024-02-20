import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { INTERNATIONALIZE_CONFIG } from '@lib/config/locale/internationalize/internationalize.constants';
import { type InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';
import { initReactI18next } from 'react-i18next';

const { _config, config } = defineConfig({
  _config: _internationalize,

  config: () =>
    ({
      ...INTERNATIONALIZE_CONFIG,

      isPreload: false,

      modules: [initReactI18next],
    }) satisfies InternationalizeConfigModel,
});

export { _config, config };
