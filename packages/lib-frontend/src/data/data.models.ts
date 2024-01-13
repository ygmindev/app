import { type QueryClient } from '@tanstack/react-query';
import { type ReactElement } from 'react';

import { type WithIconPropsModel } from '@lib-frontend/core/components/Icon/Icon.models';
import { type ElementStatePropsModel } from '@lib-frontend/core/core.models';
import {
  type FocusableRefModel,
  type FocusableWrapperPropsModel,
} from '@lib-frontend/data/components/FocusableWrapper/FocusableWrapper.models';
import {
  type AMOUNT_UNIT,
  type NUMBER_UNIT_TYPE,
  type RATE_UNIT,
  type RELATIVE_DATE_UNIT,
} from '@lib-frontend/data/data.constants';
import { type TranslatableTextModel } from '@lib-frontend/locale/locale.models';
import {
  type InferModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib-shared/core/core.models';

export type QueryContextModel = {
  client?: QueryClient;
  state?: object;
};

export type DataRendererModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = (params: { row: TType; value?: TType[TKey] }) => ReactElement | null;

export type DataFormatterModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = (params: { row: TType; value: TType[TKey] }) => string;

export type AmountUnitModel = `${AMOUNT_UNIT}`;

export type RateUnitModel = `${RATE_UNIT}`;

export type RelativeDateUnitModel = `${RELATIVE_DATE_UNIT}`;

export type NumberUnitModel = AmountUnitModel | RateUnitModel | RelativeDateUnitModel;

export type NumberUnitTypeModel = `${NUMBER_UNIT_TYPE}`;

export type ValuePropsModel<TType = string> = {
  defaultValue?: TType;
  onChange?(value: TType): void;
  value?: TType;
};

export type FieldPropsModel<TType = string> = FocusableWrapperPropsModel &
  WithIconPropsModel &
  ValuePropsModel<TType> & {
    beforeSubmit?(value: TType, id: string): Promise<unknown>;
    isAutoFocus?: boolean;
    isTransparent?: boolean;
    label?: TranslatableTextModel;
    onBlur?(): void;
    onFocus?(): void;
    onSubmit?(): void;
  };

export type FieldRefModel<
  TType = unknown,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = FocusableRefModel &
  Pick<FieldPropsModel<TType[TKey]>, 'beforeSubmit'> & {
    submit?(): Promise<void>;
  };

export type FormErrorModel<TType> =
  | {
      [TKey in keyof TType]?: InferModel<TType[TKey]> extends PrimitiveModel
        ? TranslatableTextModel | boolean | undefined
        : FormErrorModel<TType[TKey]>;
    }
  | undefined;

export type FormValidatorModel<TType = string | undefined, TForm = unknown> = (params: {
  data?: TForm;
  value?: TType;
}) => TranslatableTextModel | null;

export type FormValidatorsModel<TType> = {
  [TKey in keyof TType]?: TType[TKey] extends object
    ? FormValidatorsModel<TType[TKey]>
    : FormValidatorModel<TType[TKey], TType>;
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
