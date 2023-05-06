import { internationalizeConfig } from '@lib/config/locale/internationalize/configs/internationalize.config';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import type { I18nextProviderProps } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

export const _LocaleProvider = composeComponent<_LocaleProviderPropsModel, I18nextProviderProps>({
  Component: I18nextProvider,

  getProps: ({ children, value }) => ({ children, i18n: value?.i18n || internationalizeConfig }),
});
