import {
  type _UseTranslationModel,
  type _UseTranslationParamsModel,
} from '@lib-frontend/locale/hooks/useTranslation/_useTranslation.models';
import { type TranslatableTextModel } from '@lib-frontend/locale/locale.models';

export type UseTranslationParamsModel = _UseTranslationParamsModel;

export type UseTranslationModel = Omit<_UseTranslationModel, 't'> & {
  t<TParams = undefined>(key?: TranslatableTextModel, params?: TParams): string;
};
