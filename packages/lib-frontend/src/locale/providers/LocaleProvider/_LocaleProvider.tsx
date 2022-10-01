import { i18nConfig } from '@lib/config/i18n/i18n.config';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _LocaleProviderPropsModel } from '@lib/frontend/locale/providers/LocaleProvider/_LocaleProvider.models';
import { _Backend, _backend } from '@lib/frontend/locale/providers/LocaleProvider/backend/_backend';
import {
  _detection,
  _Detector,
} from '@lib/frontend/locale/providers/LocaleProvider/detection/_detection';
import i18next, { use } from 'i18next';
import type { I18nextProviderProps } from 'react-i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

use(_Backend).use(_Detector);

use(initReactI18next).init({
  ...i18nConfig,
  backend: _backend,
  detection: _detection,
});

export const _LocaleProvider = composeComponent<_LocaleProviderPropsModel, I18nextProviderProps>({
  Component: I18nextProvider,
  getProps: ({ children }) => ({ children, i18n: i18next }),
});
