import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type AsyncBoundaryContextModel } from '@lib/frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import {
  type ElementStatePropsModel,
  type RefPropsModel,
  type SizableMorePropsModel,
} from '@lib/frontend/core/core.models';
import { type FORM_SUBMIT_TYPE } from '@lib/frontend/data/components/FormContainer/FormContainer.constants';
import {
  type FormRefModel,
  type InputPropsModel,
  type InputRefModel,
  type SubmittablePropsModel,
} from '@lib/frontend/data/data.models';
import { type UseFormParamsModel } from '@lib/frontend/data/hooks/useForm/useForm.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type ReactElement, type ReactNode, type RefObject } from 'react';

export type FormContainerPropsModel<TType, TResult = void> = WrapperPropsModel &
  RefPropsModel<FormContainerRefModel<TType>> &
  UseFormParamsModel<TType, TResult> &
  SubmittablePropsModel<TType, TResult> &
  SizableMorePropsModel &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    cancelLabel?: AsyncTextModel;
    fields?: Array<FormFieldsModel<TType>>;
    isButton?: boolean;
    submitLabel?: AsyncTextModel;
    submitType?: FORM_SUBMIT_TYPE;
    bottomElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
    topElement?(params: Pick<ElementStatePropsModel, 'elementState'>): ReactNode;
  };

export type FormContainerRefModel<TType> = FormRefModel<TType> & {
  inputRefs: RefObject<FormFieldsRefModel<TType>>;
  values?: TType;
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
  element: ReactElement<InputPropsModel<TType[TKey]> & { ref?: InputRefModel<TType, TKey> }>;
};

export type FormFieldsModel<TType> =
  | FormTileModel<TType>
  | FormRowModel<TType>
  | FormFieldModel<TType>
  | { [TKey in StringKeyModel<TType>]: FormFieldModel<TType, TKey> }[StringKeyModel<TType>];

export type FormFieldsRefModel<TType> = {
  [TKey in StringKeyModel<TType>]?: InputRefModel<TType, TKey>;
};
