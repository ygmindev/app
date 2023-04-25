import type { FormErrorModel, SubmittablePropsModel } from '@lib/frontend/form/form.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _UseFormParamsModel<TType = void, TResult = void>
  extends Pick<
    SubmittablePropsModel<TType, TResult>,
    'beforeSubmit' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
  > {
  initialValues?: TType;
  onValidate?(data: TType): Promise<FormErrorModel<TType>>;
}

export interface _UseFormModel<TType = void, TResult = void> {
  data?: TResult | null;
  errors: FormErrorModel<TType>;
  handleChange(key: string): (value: string) => void;
  handleReset: CallableModel;
  handleSubmit: CallableModel;
  isLoading: boolean;
  isValid: boolean;
  setErrors(errors?: Error): void;
  setValues(data: TType): void;
  values: TType;
}
