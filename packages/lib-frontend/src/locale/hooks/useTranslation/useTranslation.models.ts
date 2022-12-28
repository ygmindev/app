import type { _UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/_useTranslation.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export interface UseTranslationModel extends Omit<_UseTranslationModel, 't'> {
  t<TParams = undefined>(key?: TranslatableTextModel, params?: TParams): string;
}
