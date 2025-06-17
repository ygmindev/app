import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { INTERNATIONALIZE_CONFIG } from '@lib/config/locale/internationalize/internationalize.constants';
import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { initReactI18next } from 'react-i18next';

export const config = defineConfig<InternationalizeConfigModel, _InternationalizeConfigModel>({
  config: _internationalize,

  params: () => ({
    ...INTERNATIONALIZE_CONFIG,

    isDebug: process.env.NODE_ENV === 'development',

    isPreload: false,

    modules: [initReactI18next],
  }),
});

export default config;
