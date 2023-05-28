import { config } from '@lib/config/locale/internationalize/internationalize.base';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import { isSsr } from '@lib/platform/core/utils/isSsr/isSsr';
import type { I18nextProviderProps } from 'react-i18next';
import { I18nextProvider, useSSR } from 'react-i18next';

export const _LocaleProviderSsr: SFCModel<_LocaleProviderPropsModel> = ({ children, value }) => {
  useSSR(value?.store || {}, value?.lang || config.languageDefault);
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
          children: isSsr ? (
            children
          ) : (
            <_LocaleProviderSsr value={value}>{children}</_LocaleProviderSsr>
          ),
          i18n: value?.i18n,
        }
      : null,
});
