import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { UseFormParamsModel } from '@lib/frontend/form/hooks/useForm/useForm.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement, ReactNode } from 'react';

export interface FormContainerFieldModel
  extends WithIdModel,
    WithFieldPropsModel,
    Pick<TextFieldPropsModel, 'type' | 'autoComplete'>,
    Partial<Pick<SelectFieldPropsModel, 'options'>> {
  render?(params: WithFieldPropsModel): ReactElement;
}

export interface FormContainerRowModel extends WithIdModel {
  fields?: Array<FormContainerFieldModel>;
}

export interface FormContainerPropsModel<TType>
  extends UseFormParamsModel<TType>,
    Pick<WithFieldPropsModel, 'isAutoFocus'>,
    WithSubmitPropsModel<TType>,
    WithStyleParamsModel,
    WithTestIdModel {
  cancelLabel?: TranslationTextModel;
  isFullWidth?: boolean;
  leftElement?: ReactNode;
  onReset?: CallableModel;
  rows: Array<FormContainerRowModel>;
  submitLabel?: TranslationTextModel;
}
