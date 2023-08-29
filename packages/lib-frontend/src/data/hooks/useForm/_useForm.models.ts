import { type FormErrorModel, type SubmittablePropsModel } from '#lib-frontend/data/data.models';

export type _UseFormParamsModel<TType, TResult = void> = Pick<
  SubmittablePropsModel<TType, TResult>,
  'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
> & {
  initialValues?: TType;
  onValidate?(data: TType): Promise<FormErrorModel<TType>>;
};

export type _UseFormModel<TType, TResult = void> = {
  data?: TResult | null;
  errors: FormErrorModel<TType>;
  handleChange(key: string): (value: string) => void;
  handleReset(): void;
  handleSubmit(): void;
  isLoading: boolean;
  isValid: boolean;
  setErrors(errors?: Error): void;
  values: TType;
};
