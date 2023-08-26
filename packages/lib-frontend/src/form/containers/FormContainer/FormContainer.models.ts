import { type ReactElement, type ReactNode } from 'react';

import { type AsyncBoundaryContextModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ElementStatePropsModel, type SFCPropsModel } from '#lib-frontend/core/core.models';
import { type SelectFieldPropsModel } from '#lib-frontend/form/components/SelectField/SelectField.models';
import { type SwitchFieldPropsModel } from '#lib-frontend/form/components/SwitchField/SwitchField.models';
import { type TextFieldPropsModel } from '#lib-frontend/form/components/TextField/TextField.models';
import { type FORM_FIELD_TYPE } from '#lib-frontend/form/containers/FormContainer/FormContainer.constants';
import {
  type StringFieldPropsModel,
  type SubmittablePropsModel,
} from '#lib-frontend/form/form.models';
import {
  type UseFormModel,
  type UseFormParamsModel,
} from '#lib-frontend/form/hooks/useForm/useForm.models';
import { type TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';
import { type FieldTypeModel } from '#lib-shared/form/form.models';

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
  StringFieldPropsModel &
  Pick<UseFormModel<TType, TResult>, 'handleSubmit' | 'handleReset'>;

export type FormContainerRowModel = PartialModel<WithIdModel> & {
  fields?: Array<FormFieldPropsModel>;
};

export type FormFieldPropsModel = WithIdModel & {
  type?: FieldTypeModel;
} & (
    | { element?: never; field: FORM_FIELD_TYPE.TEXT_FIELD; fieldProps?: TextFieldPropsModel }
    | { element?: never; field: FORM_FIELD_TYPE.SELECT_FIELD; fieldProps?: SelectFieldPropsModel }
    | { element?: never; field: FORM_FIELD_TYPE.SWITCH_FIELD; fieldProps?: SwitchFieldPropsModel }
    | {
        element: ReactElement<SFCPropsModel<StringFieldPropsModel>>;
        field?: never;
        fieldProps?: never;
      }
  );
