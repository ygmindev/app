import type { FormErrorModel, SubmittablePropsModel } from '@lib/frontend/form/form.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _UseFormParamsModel<TType>
  extends Pick<SubmittablePropsModel<TType>, 'onSubmit' | 'onError'> {
  initialValues?: TType;
  onValidate?(data: TType): Promise<FormErrorModel<TType>>;
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
