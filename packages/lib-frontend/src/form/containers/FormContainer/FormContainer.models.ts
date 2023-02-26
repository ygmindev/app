import type { ElementStatePropsModel } from '@lib/frontend/core/core.models';
import type { ErrorProviderContextModel } from '@lib/frontend/core/providers/ErrorProvider/ErrorProvider.models';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import type { SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/SwitchField.models';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type { FieldPropsModel, SubmittablePropsModel } from '@lib/frontend/form/form.models';
import type {
  UseFormModel,
  UseFormParamsModel,
} from '@lib/frontend/form/hooks/useForm/useForm.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { FieldTypeModel } from '@lib/shared/form/form.models';
import type { ReactElement, ReactNode } from 'react';

export type FormFieldTypeModel = `${FORM_FIELD_TYPE}`;

export interface FormContainerRenderPropsModel<TType = void, TResult = void>
  extends ElementStatePropsModel,
    Pick<UseFormModel<TType, TResult>, 'handleSubmit' | 'handleReset'> {}

export type FormContainerFieldModel = WithIdModel & {
  type?: FieldTypeModel;
} & (
    | { field: FORM_FIELD_TYPE.TEXT_FIELD; fieldProps?: TextFieldPropsModel; render?: never }
    | { field: FORM_FIELD_TYPE.SELECT_FIELD; fieldProps?: SelectFieldPropsModel; render?: never }
    | { field: FORM_FIELD_TYPE.SWITCH_FIELD; fieldProps?: SwitchFieldPropsModel; render?: never }
    | {
        field?: never;
        fieldProps?: never;
        render(params: FieldPropsModel & FormContainerRenderPropsModel): ReactElement;
      }
  );

export type FormContainerRowModel = PartialModel<WithIdModel> & {
  fields?: Array<FormContainerFieldModel>;
};

export interface FormContainerPropsModel<TType = void, TResult = void>
  extends UseFormParamsModel<TType, TResult>,
    SubmittablePropsModel<TType, TResult>,
    Pick<ErrorProviderContextModel, 'errorContextGet'> {
  bottomElement?(props: FormContainerRenderPropsModel): ReactNode;
  cancelLabel?: TranslatableTextModel;
  isButton?: boolean;
  isFullWidth?: boolean;
  leftElement?(props: FormContainerRenderPropsModel): ReactNode;
  rows?: Array<FormContainerRowModel>;
  submitLabel?: TranslatableTextModel;
  successMessage?: TranslatableTextModel;
  topElement?(props: FormContainerRenderPropsModel): ReactNode;
}

export interface FormContainerRefModel<TType = void> {
  reset(): void;
  submit(data: TType): void;
}
