import { _useTranslation } from '@lib/frontend/locale/hooks/useTranslation/_useTranslation';
import {
  type UseTranslationModel,
  type UseTranslationParamsModel,
} from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { CORE } from '@lib/shared/core/core.constants';
import isFunction from 'lodash/isFunction';

export const useTranslation = (ns: UseTranslationParamsModel = []): UseTranslationModel => {
  const {
    currentLanguage,
    currentLanguageSet,
    isInitialized,
    t: _t,
  } = _useTranslation([CORE, ...ns]);
  const t = <TParams = undefined,>(key?: TranslatableTextModel, params?: TParams): string =>
    key && isInitialized
      ? isFunction(key)
        ? key({ currentLanguage, currentLanguageSet, isInitialized, t: _t })
        : _t(key, params ? params : { count: '', value: '' })
      : '';
  return { currentLanguage, currentLanguageSet, isInitialized, t };
};
