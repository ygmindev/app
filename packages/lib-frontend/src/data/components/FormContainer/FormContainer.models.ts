import { type ReactElement, type ReactNode } from 'react';

import { type AsyncBoundaryContextModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ElementStatePropsModel } from '#lib-frontend/core/core.models';
import {
  type FieldPropsModel,
  type FormInputModel,
  type SubmittablePropsModel,
} from '#lib-frontend/data/data.models';
import { type UseFormParamsModel } from '#lib-frontend/data/hooks/useForm/useForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';
import {
  type FilterConditionModel,
  type FilterModel,
} from '#lib-shared/resource/utils/Filter/Filter.models';

export type FormContainerPropsModel<
  TType,
  TResult = void,
  TInput extends FormInputModel<TType> = TType,
> = UseFormParamsModel<TType, TResult, TInput> &
  SubmittablePropsModel<TType, TResult> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    bottomElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
    cancelLabel?: TranslatableTextModel;
    fields?: Array<FormFieldsModel<TType, TInput>>;
    isButton?: boolean;
    submitLabel?: TranslatableTextModel;
    topElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
  };

export type FormTileModel<TType, TInput extends FormInputModel<TType> = TType> = WithIdModel<
  StringKeyModel<TType>
> & {
  fields?: Array<FormFieldModel<TType, TInput> | FormRowModel<TType, TInput>>;
  label?: TranslatableTextModel;
};

export type FormRowModel<TType, TInput extends FormInputModel<TType> = TType> = WithIdModel<
  StringKeyModel<TType>
> & {
  fields?: Array<FormFieldModel<TType, TInput>>;
  isGrouped?: boolean;
};

export type FormFieldModel<
  TType,
  TInput extends FormInputModel<TType> = TType,
  TKey extends StringKeyModel<TType> = StringKeyModel<TType>,
> = WithIdModel<TKey> & {
  element: ReactElement<FieldPropsModel<TInput[TKey]>>;
  toFilter?:
    | FilterConditionModel
    | ((field: TKey, value?: TType[TKey]) => Array<FilterModel<TType>>);
};

export type FormFieldsModel<TType, TInput extends FormInputModel<TType> = TType> =
  | FormFieldModel<TType, TInput>
  | FormTileModel<TType, TInput>
  | FormRowModel<TType, TInput>;
