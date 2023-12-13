import { type ReactElement, type ReactNode, type RefObject } from 'react';

import { type AsyncBoundaryContextModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ElementStatePropsModel } from '#lib-frontend/core/core.models';
import {
  type FieldPropsModel,
  type FieldRefModel,
  type FormRefModel,
  type SubmittablePropsModel,
} from '#lib-frontend/data/data.models';
import { type UseFormParamsModel } from '#lib-frontend/data/hooks/useForm/useForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type FormContainerPropsModel<TType, TResult = void> = UseFormParamsModel<TType, TResult> &
  SubmittablePropsModel<TType, TResult> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    bottomElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
    cancelLabel?: TranslatableTextModel;
    fields?: Array<FormFieldsModel<TType>>;
    isAutoFocus?: boolean;
    isButton?: boolean;
    submitLabel?: TranslatableTextModel;
    topElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
  };

export type FormTileModel<TType> = WithIdModel<StringKeyModel<TType>> & {
  fields?: Array<
    | FormRowModel<TType>
    | { [TKey in StringKeyModel<TType>]: FormFieldModel<TType, TKey> }[StringKeyModel<TType>]
  >;
  title?: TranslatableTextModel;
};

export type FormRowModel<TType> = WithIdModel<StringKeyModel<TType>> & {
  fields?: Array<
    { [TKey in StringKeyModel<TType>]: FormFieldModel<TType, TKey> }[StringKeyModel<TType>]
  >;
  isGrouped?: boolean;
};

export type FormFieldModel<
  TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = WithIdModel<TKey> & {
  element: ReactElement<FieldPropsModel<TType[TKey]>>;
};

export type FormFieldsModel<TType> =
  | FormTileModel<TType>
  | FormRowModel<TType>
  | FormFieldModel<TType>
  | { [TKey in StringKeyModel<TType>]: FormFieldModel<TType, TKey> }[StringKeyModel<TType>];

export type FormFieldsRefModel<TType> = {
  [TKey in StringKeyModel<TType>]?: FieldRefModel<TType, TKey>;
};

export type FormContainerRefModel<TType> = FormRefModel<TType> & {
  fieldRefs: RefObject<FormFieldsRefModel<TType>>;
};
