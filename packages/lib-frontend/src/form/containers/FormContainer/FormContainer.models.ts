import type {
  ChildrenPropsModel,
  FieldPropsModel,
  StylePropsModel,
} from '@lib/frontend/core/core.models';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import type { SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/SwitchField.models';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { UseFormParamsModel } from '@lib/frontend/form/hooks/useForm/useForm.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { FieldTypeModel } from '@lib/shared/form/form.models';
import type { ReactElement, ReactNode } from 'react';

export type FormFieldTypeModel = `${FORM_FIELD_TYPE}`;

export type FormContainerFieldModel = WithIdModel &
  FieldPropsModel & { type?: FieldTypeModel } & (
    | ({ field: FORM_FIELD_TYPE.TEXT_FIELD; render?: never } & TextFieldPropsModel)
    | ({ field: FORM_FIELD_TYPE.SELECT_FIELD; render?: never } & SelectFieldPropsModel)
    | ({ field: FORM_FIELD_TYPE.SWITCH_FIELD; render?: never } & SwitchFieldPropsModel)
    | ({ field?: never } & { render(params: FieldPropsModel): ReactElement })
  );

export interface FormContainerRowModel extends WithIdModel {
  fields?: Array<FormContainerFieldModel>;
}

export interface FormContainerPropsModel<TType>
  extends StylePropsModel,
    ChildrenPropsModel,
    UseFormParamsModel<TType>,
    WithSubmitPropsModel<TType>,
    TestIdPropsModel {
  cancelLabel?: TranslatableTextModel;
  isFullWidth?: boolean;
  leftElement?: ReactNode;
  rows?: Array<FormContainerRowModel>;
  submitLabel?: TranslatableTextModel;
}
