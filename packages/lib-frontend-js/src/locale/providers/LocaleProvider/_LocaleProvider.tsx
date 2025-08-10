import { LANGUAGE_DEFAULT } from '@lib/config/locale/internationalize/internationalize.constants';
import { type FCModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import { type I18nextProviderProps } from 'react-i18next';
import { I18nextProvider, useSSR } from 'react-i18next';

const _LocaleProviderF: FCModel<_LocaleProviderPropsModel> = ({ children, value }) => {
  useSSR(value?.store ?? {}, value?.lang ?? LANGUAGE_DEFAULT);
  return <>{children}</>;
};

export const _LocaleProvider = composeComponent<
  _LocaleProviderPropsModel,
  Omit<I18nextProviderProps, 'children'>
>({
  Component: I18nextProvider,

  getProps: ({ children, value }) =>
    value
      ? {
          children: <_LocaleProviderF value={value}>{children}</_LocaleProviderF>,
          i18n: value?.i18n,
        }
      : null,
});
