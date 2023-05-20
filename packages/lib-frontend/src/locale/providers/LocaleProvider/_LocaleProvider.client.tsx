import internationalizeConfig from '@lib/config/locale/internationalize/internationalize.base';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import { useSSR } from 'react-i18next';

export const _LocaleProvider: SFCModel<_LocaleProviderPropsModel> = ({ children, value }) => {
  useSSR(value?.store || {}, value?.lang || internationalizeConfig.languageDefault);
  return <>{children}</>;
};
