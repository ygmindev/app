import type {
  _UseFormModel,
  _UseFormParamsModel,
} from '@lib/frontend/core/hooks/useForm/_useForm.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { InferModel } from '@lib/shared/core/core.models';
import type { Primitive } from 'type-fest';

export type FormErrorModel<TType> = {
  [TKey in keyof TType]?: InferModel<TType[TKey]> extends Primitive
    ? string | boolean | undefined
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

export interface UseFormParamsModel<TType>
  extends Pick<_UseFormParamsModel<TType>, 'onSubmit' | 'initialValues'> {
  validators?: FormValidatorsModel<TType>;
}

export interface UseFormModel<TType> extends _UseFormModel<TType> {
  isEmpty: boolean;
  isFilled: boolean;
}
