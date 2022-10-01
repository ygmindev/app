import type { UseTranslationModel } from './hooks/useTranslation/useTranslation.models';

export type TranslationTextModel = string | ((params: UseTranslationModel) => string);
