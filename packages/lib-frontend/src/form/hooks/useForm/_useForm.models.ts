import { type FormErrorModel, type SubmittablePropsModel } from '#lib-frontend/form/form.models';

export type _UseFormParamsModel<TType = void, TResult = void> = {
  initialValues?: TType;
  onValidate?(data: TType): Promise<FormErrorModel<TType>>;
} & Pick<
  SubmittablePropsModel<TType, TResult>,
  'beforeSubmit' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
>;

export type _UseFormModel<TType = void, TResult = void> = {
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
