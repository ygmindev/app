import isFunction from 'lodash/isFunction';

import { config } from '#lib-config/locale/internationalize/internationalize.base';
import { _useTranslation } from '#lib-frontend/locale/hooks/useTranslation/_useTranslation';
import {
  type UseTranslationModel,
  type UseTranslationParamsModel,
} from '#lib-frontend/locale/hooks/useTranslation/useTranslation.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';

export const useTranslation = (ns: UseTranslationParamsModel = []): UseTranslationModel => {
  const {
    currentLanguage,
    isInitialized,
    t: _t,
  } = _useTranslation([...ns, ...([config.namespaceDefault] || [])]);

  const t = <TParams = undefined,>(key?: TranslatableTextModel, params?: TParams): string =>
    key && isInitialized
      ? isFunction(key)
        ? key({ currentLanguage, isInitialized, t })
        : _t(key, params ? params : { count: '', value: '' })
      : '';

  return { currentLanguage, isInitialized, t };
};
