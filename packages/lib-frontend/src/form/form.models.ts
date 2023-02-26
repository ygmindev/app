import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { ElementStatePropsModel, ValuePropsModel } from '@lib/frontend/core/core.models';
import type { TranslatableModel, TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type {
  CallableModel,
  InferModel,
  OverrideModel,
  PrimitiveModel,
} from '@lib/shared/core/core.models';

export interface FieldPropsModel<TType extends string = string>
  extends Pick<IconPropsModel, 'icon'>,
    ElementStatePropsModel,
    ValuePropsModel<TType> {
  error?: string | boolean;
  isAutoFocus?: boolean;
  label?: string;
}

export type FormErrorModel<TType> = {
  [TKey in keyof TType]?: InferModel<TType[TKey]> extends PrimitiveModel
    ? TranslatableTextModel | boolean | undefined
    : FormErrorModel<TType[TKey]>;
};

export type FormValidatorModel<TType = string | undefined> = (params: {
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
  onComplete?: CallableModel;
  onError?(error: Error): void;
  onSubmit?(data: TType): Promise<TResult | null>;
  onSuccess?(data: TType, result?: TResult | null): Promise<void>;
}

export type TranslatableFieldPropsModel<TType extends FieldPropsModel> = OverrideModel<
  TranslatableModel<TType, 'label'>,
  { error?: TranslatableTextModel | boolean }
>;
