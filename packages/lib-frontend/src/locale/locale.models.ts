import type { UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';

export type TranslatableTextModel = string | ((params: UseTranslationModel) => string);
