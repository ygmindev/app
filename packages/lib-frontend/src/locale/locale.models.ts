import type { UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import type {
  OptionalKeysModel,
  OverrideModel,
  RequiredKeysModel,
} from '@lib/shared/core/core.models';
import type { i18n } from 'i18next';

export type TranslatableTextModel = string | ((params: UseTranslationModel) => string);

export type TranslatableModel<TType, TKeys extends keyof TType> = OverrideModel<
  TType,
  {
    [TKey in RequiredKeysModel<Pick<TType, TKeys>>]: TranslatableTextModel;
  } & {
    [TKey in OptionalKeysModel<Pick<TType, TKeys>>]?: TranslatableTextModel | undefined;
  }
>;

export type LocaleStoreModel = Record<string, Record<string, object>>;

export interface LocaleParamsModel {
  i18n?: i18n;
  lang?: string;
  store?: LocaleStoreModel;
}
