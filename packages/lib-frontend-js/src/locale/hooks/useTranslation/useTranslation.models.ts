import {
  type _UseTranslationModel,
  type _UseTranslationParamsModel,
} from '@lib/frontend/locale/hooks/useTranslation/_useTranslation.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';

export type UseTranslationParamsModel = _UseTranslationParamsModel;

export type UseTranslationModel = Omit<_UseTranslationModel, 't'> & {
  t<TParams = undefined>(key?: AsyncTextModel, params?: TParams): string;
};
