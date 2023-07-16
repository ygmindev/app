import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type WrapperPropsModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { type ElementStatePropsModel, type ValuePropsModel } from '#lib-frontend/core/core.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type InferModel, type PrimitiveModel } from '#lib-shared/core/core.models';

export type FieldPropsModel<TType> = {
  error?: TranslatableTextModel | boolean;
  isAutoFocus?: boolean;
  isTransparent?: boolean;
  label?: TranslatableTextModel;
  onBlur?(): void;
  onFocus?(): void;
} & Pick<IconPropsModel, 'icon'> &
  ElementStatePropsModel &
  ValuePropsModel<TType> &
  Pick<WrapperPropsModel, 'round' | 'zIndex'>;

export type StringFieldPropsModel<TType extends string = string> = FieldPropsModel<TType>;

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

export type SubmittablePropsModel<TType = void, TResult = void> = {
  beforeSubmit?(data: TType): Promise<TType>;
  onCancel?(): void;
  onComplete?(): void;
  onError?(error: Error): void;
  onSubmit?(data: TType): Promise<TResult | null>;
  onSuccess?(data: TType, result?: TResult | null): Promise<void>;
} & ElementStatePropsModel;

export type TranslatableFieldPropsModel<TType extends StringFieldPropsModel> = Omit<
  TType,
  'label' | 'error'
> & {
  error?: TranslatableTextModel | boolean;
  label?: TranslatableTextModel;
};

export type FormRefModel = {
  reset(): void;
  submit(): void;
};
