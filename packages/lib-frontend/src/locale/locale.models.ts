import type { FieldPropsModel, OptionModel } from '@lib/frontend/core/core.models';
import type { UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import type { OverrideModel } from '@lib/shared/core/core.models';
import type { i18n } from 'i18next';

export type TranslatableTextModel = string | ((params: UseTranslationModel) => string);

export type TranslatableFieldPropsModel<TType extends FieldPropsModel> = OverrideModel<
  TType,
  { error?: TranslatableTextModel | boolean; label?: TranslatableTextModel }
>;

export type TranslatableOptionModel = OverrideModel<OptionModel, { label?: TranslatableTextModel }>;

export type LocaleStoreModel = Record<string, Record<string, object>>;

export interface LocaleParamsModel {
  i18n?: i18n;
  lang?: string;
  store?: LocaleStoreModel;
}
