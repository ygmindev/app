import type { FieldPropsModel, OptionModel } from '@lib/frontend/core/core.models';
import type { UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import type { OverrideModel } from '@lib/shared/core/core.models';

export type TranslatableTextModel = string | ((params: UseTranslationModel) => string);

export type TranslatableFieldPropsModel<TType extends FieldPropsModel> = OverrideModel<
  TType,
  { error?: TranslatableTextModel | boolean; label?: TranslatableTextModel }
>;

export type TranslatableOptionModel = OverrideModel<OptionModel, { label?: TranslatableTextModel }>;
