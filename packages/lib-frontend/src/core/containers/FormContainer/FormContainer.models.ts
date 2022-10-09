import type { FormPropsModel } from '@lib/frontend/core/components/Form/Form.models';
import type { SelectFieldPropsModel } from '@lib/frontend/core/components/SelectField/SelectField.models';
import type { TextFieldPropsModel } from '@lib/frontend/core/components/TextField/TextField.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type { UseFormParamsModel } from '@lib/frontend/core/hooks/useForm/useForm.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';

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
    Pick<
      FormPropsModel,
      'onClose' | 'closeLabel' | 'isFullWidth' | 'isLoading' | 'isDisabled' | 'leftElement'
    >,
    Pick<WithFieldPropsModel, 'isAutoFocus'>,
    WithStyleParamsModel,
    WithTestIdModel {
  rows: Array<FormContainerRowModel>;
}
