import internationalizeConfig from '@lib/config/locale/internationalize/internationalize.base';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import { I18nextProvider, useSSR } from 'react-i18next';

export const _LocaleProvider: SFCModel<_LocaleProviderPropsModel> = ({ children, value }) => {
  useSSR(value?.store || {}, value?.lang || internationalizeConfig.languageDefault);
  return value?.i18n ? <I18nextProvider i18n={value.i18n}>{children}</I18nextProvider> : null;
};
