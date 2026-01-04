import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _LocaleProviderPropsModel } from '@lib/frontend/locale/containers/LocaleProvider/_LocaleProvider.models';
import { type I18nextProviderProps } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

export const _LocaleProvider = composeComponent<
  _LocaleProviderPropsModel,
  Omit<I18nextProviderProps, 'children'>
>({
  Component: I18nextProvider,

  getProps: ({ children, value }) => (value ? { children, i18n: value?.i18n } : null),
});
