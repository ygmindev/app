import type { ElementStatePropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { CallableModel, InferModel, PrimitiveModel } from '@lib/shared/core/core.models';

export type FormErrorModel<TType> = {
  [TKey in keyof TType]?: InferModel<TType[TKey]> extends PrimitiveModel
    ? TranslatableTextModel | boolean | undefined
    : FormErrorModel<TType[TKey]>;
};

export type FormValidatorModel<TType = string> = (params: {
  value: TType;
}) => TranslatableTextModel | null;

export type FormValidatorsModel<TType> = {
  [TKey in keyof TType]?: TType[TKey] extends object
    ? FormValidatorsModel<TType[TKey]>
    : FormValidatorModel<TType[TKey]>;
};

export interface SubmittablePropsModel<TType = void, TResult = void>
  extends ElementStatePropsModel {
  onCancel?: CallableModel;
  onError?(error: Error): void;
  onSubmit?(data: TType): Promise<TResult>;
  onSuccess?(data: TType, result: TResult): Promise<void>;
}
