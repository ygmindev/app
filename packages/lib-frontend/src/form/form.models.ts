import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { ElementStatePropsModel, ValuePropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { CallableModel, InferModel, PrimitiveModel } from '@lib/shared/core/core.models';

export interface FieldPropsModel<TType>
  extends Pick<IconPropsModel, 'icon'>,
    ElementStatePropsModel,
    ValuePropsModel<TType>,
    Pick<WrapperPropsModel, 'round' | 'zIndex'> {
  error?: TranslatableTextModel | boolean;
  isAutoFocus?: boolean;
  isTransparent?: boolean;
  label?: TranslatableTextModel;
  onBlur?: CallableModel;
  onFocus?: CallableModel;
}

export interface StringFieldPropsModel<TType extends string = string>
  extends FieldPropsModel<TType> {}

export type FormErrorModel<TType> = {
  [TKey in keyof TType]?: InferModel<TType[TKey]> extends PrimitiveModel
    ? TranslatableTextModel | boolean | undefined
    : FormErrorModel<TType[TKey]>;
};

export type FormValidatorModel<TForm = unknown, TType = string | undefined> = (params: {
  data?: TForm;
  value: TType;
}) => TranslatableTextModel | null;

export type FormValidatorsModel<TType> = {
  [TKey in keyof TType]?: TType[TKey] extends object
    ? FormValidatorsModel<TType[TKey]>
    : FormValidatorModel<TType, TType[TKey]>;
};

export interface SubmittablePropsModel<TType = void, TResult = void>
  extends ElementStatePropsModel {
  beforeSubmit?(data: TType): Promise<TType>;
  onCancel?: CallableModel;
  onComplete?: CallableModel;
  onError?(error: Error): void;
  onSubmit?(data: TType): Promise<TResult | null>;
  onSuccess?(data: TType, result?: TResult | null): Promise<void>;
}

export type TranslatableFieldPropsModel<TType extends StringFieldPropsModel> = Omit<
  TType,
  'label' | 'error'
> & {
  error?: TranslatableTextModel | boolean;
  label?: TranslatableTextModel;
};

export interface FormRefModel<TType = void> {
  reset(): void;
  submit(data?: TType): void;
}
