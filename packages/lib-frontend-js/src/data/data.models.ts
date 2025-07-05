import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type WithIconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import {
  type FocusableRefModel,
  type FocusableWrapperPropsModel,
} from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper.models';
import { type QueryClient } from '@lib/frontend/data/utils/QueryClient/QueryClient';
import {
  type InferModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type ReactElement } from 'react';

export type QueryContextModel = {
  client?: QueryClient;
  state?: object;
};

export type DataRendererModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = (params: { id: string; index: number; row: TType; value?: TType[TKey] }) => ReactElement | null;

export type DataFormatterModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = (params: { id: string; index: number; row: TType; value?: TType[TKey] }) => string | undefined;

export type ValuePropsModel<TType = string> = {
  defaultValue?: TType;
  value?: TType;
  onChange?(value: TType): void;
};

export type InputPropsModel<TType = string> = FocusableWrapperPropsModel &
  WithIconPropsModel &
  ValuePropsModel<TType> & {
    isTransparent?: boolean;
    label?: AsyncTextModel;
    beforeSubmit?(value: TType, id: string): Promise<unknown>;
    onBlur?(): void;
    onFocus?(): void;
    onSubmit?(): void;
  };

export type InputRefModel<
  TType = unknown,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = FocusableRefModel &
  Pick<InputPropsModel<TType[TKey]>, 'beforeSubmit' | 'onChange'> & {
    submit?(): Promise<void>;
  };

export type FormErrorModel<TType> =
  | {
      [TKey in keyof TType]?: InferModel<TType[TKey]> extends PrimitiveModel
        ? AsyncTextModel | boolean | undefined
        : FormErrorModel<TType[TKey]>;
    }
  | undefined;

export type FormValidatorModel<TType = string | undefined, TForm = unknown> = (params: {
  data?: TForm;
  value?: TType;
}) => AsyncTextModel | null;

export type FormValidatorsModel<TType> = {
  [TKey in keyof TType]?: TType[TKey] extends object
    ? FormValidatorsModel<TType[TKey]>
    : Array<FormValidatorModel<TType[TKey], TType>>;
};

export type FormInputModel<TType> = {
  [TKey in keyof TType]: unknown;
};

export type SubmittablePropsModel<TType, TResult = void> = ElementStatePropsModel & {
  onCancel?(): void;
  onComplete?(): void;
  onError?(error: Error): void;
  onSubmit?(data: TType): Promise<TResult | null>;
  onSuccess?(data?: TType, result?: TResult | null): Promise<void>;
};

export type FormRefModel<TType = undefined> = {
  reset(): void;
  submit(): Promise<void>;
  valuesSet(data?: TType): Promise<void>;
};

export type AsyncPropsModel = {
  isBlocking?: boolean;
};
