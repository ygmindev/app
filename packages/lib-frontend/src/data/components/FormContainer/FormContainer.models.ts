import { type AsyncBoundaryContextModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type AsyncTextModel, type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import {
  type FormRefModel,
  type InputPropsModel,
  type InputRefModel,
  type SubmittablePropsModel,
} from '@lib/frontend/data/data.models';
import { type UseFormParamsModel } from '@lib/frontend/data/hooks/useForm/useForm.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type FunctionComponentElement, type ReactNode, type RefObject } from 'react';

export type FormContainerPropsModel<TType, TResult = void> = UseFormParamsModel<TType, TResult> &
  SubmittablePropsModel<TType, TResult> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    bottomElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
    cancelLabel?: AsyncTextModel;
    fields?: Array<FormFieldsModel<TType>>;
    isButton?: boolean;
    submitLabel?: AsyncTextModel;
    topElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
  };

export type FormTileModel<TType> = WithIdModel & {
  fields?: Array<
    | FormRowModel<TType>
    | { [TKey in StringKeyModel<TType>]: FormFieldModel<TType, TKey> }[StringKeyModel<TType>]
  >;
  title?: AsyncTextModel;
};

export type FormRowModel<TType> = WithIdModel & {
  fields?: Array<
    { [TKey in StringKeyModel<TType>]: FormFieldModel<TType, TKey> }[StringKeyModel<TType>]
  >;
  isGrouped?: boolean;
};

export type FormFieldModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = WithIdModel<TKey> & {
  element: FunctionComponentElement<InputPropsModel<TType[TKey]>>;
};

export type FormFieldsModel<TType> =
  | FormTileModel<TType>
  | FormRowModel<TType>
  | FormFieldModel<TType>
  | { [TKey in StringKeyModel<TType>]: FormFieldModel<TType, TKey> }[StringKeyModel<TType>];

export type FormFieldsRefModel<TType> = {
  [TKey in StringKeyModel<TType>]?: InputRefModel<TType, TKey>;
};

export type FormContainerRefModel<TType> = FormRefModel<TType> & {
  inputRefs: RefObject<FormFieldsRefModel<TType>>;
};
