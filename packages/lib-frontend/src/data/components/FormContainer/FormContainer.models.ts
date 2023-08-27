import { type ReactElement, type ReactNode } from 'react';

import { type AsyncBoundaryContextModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ElementStatePropsModel, type SFCPropsModel } from '#lib-frontend/core/core.models';
import { type FORM_PROPERTY_TYPE } from '#lib-frontend/data/components/FormContainer/FormContainer.constants';
import { type SelectFieldPropsModel } from '#lib-frontend/data/components/SelectField/SelectField.models';
import { type SwitchFieldPropsModel } from '#lib-frontend/data/components/SwitchField/SwitchField.models';
import { type TextFieldPropsModel } from '#lib-frontend/data/components/TextField/TextField.models';
import { type FieldPropsModel, type SubmittablePropsModel } from '#lib-frontend/data/data.models';
import {
  type UseFormModel,
  type UseFormParamsModel,
} from '#lib-frontend/data/hooks/useForm/useForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';
import { type DataTypeModel } from '#lib-shared/data/data.models';

export type FormContainerPropsModel<TType = void, TResult = void> = UseFormParamsModel<
  TType,
  TResult
> &
  SubmittablePropsModel<TType, TResult> &
  Pick<AsyncBoundaryContextModel, 'errorContextGet'> & {
    autoFocus?: string | boolean;
    bottomElement?(props: FormContainerFieldPropsModel): ReactNode;
    cancelLabel?: TranslatableTextModel;
    isButton?: boolean;
    isFullWidth?: boolean;
    isGrouped?: boolean;
    isHorizontal?: boolean;
    leftElement?(props: FormContainerFieldPropsModel): ReactNode;
    rows?: Array<FormContainerRowModel>;
    submitLabel?: TranslatableTextModel;
    successMessage?: TranslatableTextModel;
    topElement?(props: FormContainerFieldPropsModel): ReactNode;
  };

export type FormContainerFieldPropsModel<TType = void, TResult = void> = ElementStatePropsModel &
  FieldPropsModel &
  Pick<UseFormModel<TType, TResult>, 'handleSubmit' | 'handleReset'>;

export type FormContainerRowModel = PartialModel<WithIdModel> & {
  fields?: Array<FormFieldPropsModel>;
};

export type FormFieldPropsModel = WithIdModel & {
  type?: DataTypeModel;
} & (
    | { element?: never; field: FORM_PROPERTY_TYPE.TEXT_FIELD; fieldProps?: TextFieldPropsModel }
    | {
        element?: never;
        field: FORM_PROPERTY_TYPE.SELECT_FIELD;
        fieldProps?: SelectFieldPropsModel;
      }
    | {
        element?: never;
        field: FORM_PROPERTY_TYPE.SWITCH_FIELD;
        fieldProps?: SwitchFieldPropsModel;
      }
    | {
        element: ReactElement<SFCPropsModel<FieldPropsModel>>;
        field?: never;
        fieldProps?: never;
      }
  );
