import type { WithSubmitPropsModel } from '@lib/frontend/form/decorators/withSubmitProps/withSubmitProps.models';
import type { FormErrorModel } from '@lib/frontend/form/form.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _UseFormParamsModel<TType> extends Pick<WithSubmitPropsModel<TType>, 'onSubmit'> {
  initialValues?: TType;
  onValidate?(data: TType): FormErrorModel<TType>;
}

export interface _UseFormModel<TType> {
  errors: FormErrorModel<TType>;
  handleChange(key: string): (value: string) => void;
  handleReset: CallableModel;
  handleSubmit: CallableModel;
  isLoading: boolean;
  isValid: boolean;
  setErrors<TError>(errors?: TError): void;
  setValues(data: TType): void;
  values: TType;
}
