import {
  type FormErrorModel,
  type FormInputModel,
  type SubmittablePropsModel,
} from '#lib-frontend/data/data.models';
import { type StringKeyModel } from '#lib-shared/core/core.models';

export type _UseFormParamsModel<
  TType,
  TResult = void,
  TInput extends FormInputModel<TType> = TType,
> = Pick<
  SubmittablePropsModel<TType, TResult>,
  'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
> & {
  initialValues?: TInput;
  onTransform?(data: TInput): TType;
  onValidate?(data: TInput): Promise<FormErrorModel<TInput>>;
};

export type _UseFormModel<TType, TResult = void, TInput extends FormInputModel<TType> = TType> = {
  data?: TResult | null;
  errors: FormErrorModel<TInput>;
  errorsSet(errors?: Error): void;
  handleChange: <TKey extends StringKeyModel<TInput>>(key: TKey) => (value: TInput[TKey]) => void;
  handleReset(): void;
  handleSubmit(): void;
  isLoading: boolean;
  isValid: boolean;
  values: TInput;
  valuesSet(data?: TInput): Promise<void>;
};
