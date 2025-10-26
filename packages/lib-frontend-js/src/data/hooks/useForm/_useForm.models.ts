import { type FormErrorModel, type SubmittablePropsModel } from '@lib/frontend/data/data.models';
import { type PartialModel, type StringKeyModel } from '@lib/shared/core/core.models';

export type _UseFormParamsModel<TType, TResult = void> = Pick<
  SubmittablePropsModel<TType, TResult>,
  'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
> & {
  initialValues?: PartialModel<TType>;
  isValidateOnChange?: boolean;
  onValidate?(data: TType): Promise<FormErrorModel<TType>>;
};

export type _UseFormModel<TType, TResult = void> = {
  data?: TResult | null;
  errors: FormErrorModel<TType>;
  handleChange: <TKey extends StringKeyModel<TType>>(key: TKey) => (value: TType[TKey]) => void;
  isChanged: boolean;
  isValid: boolean;
  values: TType;
  errorsSet(errors?: FormErrorModel<TType>): void;
  handleReset(): void;
  handleSubmit(): void;
  valuesSet(data?: TType): Promise<void>;
};
