import { type QueryClient } from '@tanstack/react-query';
import { type ReactNode } from 'react';

import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type WrapperPropsModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { type ElementStatePropsModel } from '#lib-frontend/core/core.models';
import { type NUMBER_UNIT_AMOUNT, type NUMBER_UNIT_RATE } from '#lib-frontend/data/data.constants';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import {
  type InferModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '#lib-shared/core/core.models';

export type QueryContextModel = {
  client?: QueryClient;
  state?: object;
};

export type DataRendererModel<TType> = (params: { row: TType; value?: string }) => ReactNode;

export type DataFormatterModel<TType, TKey extends StringKeyModel<TType>> = (params: {
  row: TType;
  value: TType[TKey];
}) => string;

export type NumberUnitAmountModel = `${NUMBER_UNIT_AMOUNT}`;

export type NumberUnitRateModel = `${NUMBER_UNIT_RATE}`;

export type NumberUnitModel = NumberUnitAmountModel | NumberUnitRateModel;

export type ValuePropsModel<TType = string> = {
  defaultValue?: TType;
  onChange?(value: TType): void;
  value?: TType;
};

export type FieldPropsModel<TType = string> = {
  error?: TranslatableTextModel | boolean;
  isAutoFocus?: boolean;
  isTransparent?: boolean;
  label?: TranslatableTextModel;
  onBlur?(): void;
  onFocus?(): void;
  onSubmit?(): void;
} & Pick<IconPropsModel, 'icon'> &
  ElementStatePropsModel &
  ValuePropsModel<TType> &
  Pick<WrapperPropsModel, 'round' | 'zIndex'>;

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

export type TranslatableFieldPropsModel<TType = string> = Omit<
  FieldPropsModel<TType>,
  'label' | 'error'
> & {
  error?: FieldPropsModel<TType>['error'] | TranslatableTextModel;
  label?: FieldPropsModel<TType>['label'] | TranslatableTextModel;
};

export type FormRefModel = {
  reset(): void;
  submit(): void;
};
