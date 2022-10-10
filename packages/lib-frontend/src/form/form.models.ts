import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { InferModel, PrimitiveModel } from '@lib/shared/core/core.models';

export type FormErrorModel<TType> = {
  [TKey in keyof TType]?: InferModel<TType[TKey]> extends PrimitiveModel
    ? TranslationTextModel | boolean | undefined
    : FormErrorModel<TType[TKey]>;
};

export type FormValidatorModel<TValue extends string = string, TType = unknown> = (params: {
  data?: TType;
  value: TValue;
}) => TranslationTextModel | undefined;

export type FormValidatorsModel<TType> = {
  [TKey in keyof TType]?: TType[TKey] extends object
    ? FormValidatorsModel<TType[TKey]>
    : FormValidatorModel<TType[TKey] & string, TType>;
};
