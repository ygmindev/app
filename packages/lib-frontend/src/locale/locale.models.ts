import type { UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';

export type TranslationTextModel = string | ((params: UseTranslationModel) => string);
