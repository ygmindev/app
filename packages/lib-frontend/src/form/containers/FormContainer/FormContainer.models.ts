import { type ReactNode } from 'react';

import { type ElementStatePropsModel, type SFCModel } from '#lib-frontend/core/core.models';
import { type ErrorProviderContextModel } from '#lib-frontend/core/providers/ErrorProvider/ErrorProvider.models';
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

export type FormFieldTypeModel = `${FORM_FIELD_TYPE}`;

export type FormContainerFieldPropsModel<TType = void, TResult = void> = ElementStatePropsModel &
  StringFieldPropsModel &
  Pick<UseFormModel<TType, TResult>, 'handleSubmit' | 'handleReset'>;

export type FormContainerFieldModel = WithIdModel & {
  type?: FieldTypeModel;
} & (
    | { Component?: never; field: FORM_FIELD_TYPE.TEXT_FIELD; fieldProps?: TextFieldPropsModel }
    | { Component?: never; field: FORM_FIELD_TYPE.SELECT_FIELD; fieldProps?: SelectFieldPropsModel }
    | { Component?: never; field: FORM_FIELD_TYPE.SWITCH_FIELD; fieldProps?: SwitchFieldPropsModel }
    | { Component: SFCModel<TextFieldPropsModel>; field?: never; fieldProps?: never }
  );

export type FormContainerRowModel = PartialModel<WithIdModel> & {
  fields?: Array<FormContainerFieldModel>;
};

export type FormContainerPropsModel<TType = void, TResult = void> = {
  autoFocus?: string | boolean;
  bottomElement?(props: FormContainerFieldPropsModel): ReactNode;
  cancelLabel?: TranslatableTextModel;
  isButton?: boolean;
  isFullWidth?: boolean;
  isGrouped?: boolean;
  leftElement?(props: FormContainerFieldPropsModel): ReactNode;
  rows?: Array<FormContainerRowModel>;
  submitLabel?: TranslatableTextModel;
  successMessage?: TranslatableTextModel;
  topElement?(props: FormContainerFieldPropsModel): ReactNode;
} & UseFormParamsModel<TType, TResult> &
  SubmittablePropsModel<TType, TResult> &
  Pick<ErrorProviderContextModel, 'errorContextGet'>;
