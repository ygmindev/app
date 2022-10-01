import type { FormPropsModel } from '@lib/frontend/core/components/Form/Form.models';
import type { TextFieldPropsModel } from '@lib/frontend/core/components/TextField/TextField.models';
import type { WithFieldPropsModel } from '@lib/frontend/core/decorators/withFieldProps/withFieldProps.models';
import type {
  UseFormModel,
  UseFormParamsModel,
} from '@lib/frontend/core/hooks/useForm/useForm.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { ValueTypeModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';

export interface FormContainerFieldModel<TType, TKey extends string>
  extends WithIdModel,
    WithFieldPropsModel<ValueTypeModel<TType, TKey>>,
    Pick<TextFieldPropsModel, 'type' | 'autoComplete'> {
  render?(
    form: Pick<
      UseFormModel<TType>,
      'values' | 'errors' | 'handleChange' | 'handleSubmit' | 'isLoading'
    >,
  ): ReactElement;
}

export interface FormContainerRowModel<TType, TKeys extends string[] = string[]>
  extends WithIdModel {
  fields?: Array<FormContainerFieldModel<TType, TKeys[number]>>;
}

export interface FormContainerPropsModel<TType, TKeys extends string[][] = string[][]>
  extends UseFormParamsModel<TType>,
    Pick<FormPropsModel, 'onClose' | 'closeLabel' | 'isFullWidth' | 'isLoading' | 'isDisabled'>,
    Pick<WithFieldPropsModel, 'isAutoFocus'>,
    WithStyleParamsModel,
    WithTestIdModel {
  rows?: Array<FormContainerRowModel<TType, TKeys[number]>>;
}
