import { _internationalizeConfig as _internationalizeConfigBase } from '@lib/config/locale/internationalize/_internationalize.config.base';
import type { _InternationalizeConfigParamsModel } from '@lib/config/locale/internationalize/_internationalize.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { i18n, InitOptions } from 'i18next';
import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';

export const _internationalizeConfig = (
  params: _InternationalizeConfigParamsModel & PartialModel<InitOptions>,
): i18n => {
  use(initReactI18next);

  return _internationalizeConfigBase({
    ...params,

    interpolation: { escapeValue: false },

    react: { defaultTransParent: 'div', useSuspense: true },
  });
};
