import { internationalizeConfig } from '@lib/config/locale/internationalize/configs/internationalize';
import { _useTranslation } from '@lib/frontend/locale/hooks/useTranslation/_useTranslation';
import type { UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import { isFunction } from 'lodash';

export const useTranslation = (ns: Array<string> = []): UseTranslationModel => {
  const { isInitialized, t: _t } = _useTranslation([
    ...ns,
    ...(internationalizeConfig.namespaceDefault || []),
  ]);

  const t = <TParams = undefined,>(key?: TranslationTextModel, params?: TParams): string =>
    key && isInitialized ? (isFunction(key) ? key({ isInitialized, t }) : _t(key, params)) : '';

  return { isInitialized, t };
};
