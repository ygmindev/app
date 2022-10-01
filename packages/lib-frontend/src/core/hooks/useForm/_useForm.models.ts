import type { WithSubmitPropsModel } from '@lib/frontend/core/decorators/withSubmitProps/withSubmitProps.models';
import type { FormErrorModel } from '@lib/frontend/core/hooks/useForm/useForm.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _UseFormParamsModel<TType> extends Pick<WithSubmitPropsModel<TType>, 'onSubmit'> {
  initialValues: TType;
  onValidate?(data: TType): FormErrorModel<TType>;
}

export interface _UseFormModel<TType> {
  errors: FormErrorModel<TType>;
  // TODO: fix autopath
  // handleChange<TKey extends string>(key: PathModel<TType, TKey>): (value: unknown) => void;
  handleChange<TKey extends string>(key: TKey): (value: unknown) => void;
  handleReset: CallableModel;
  handleSubmit: CallableModel;
  isLoading: boolean;
  isValid: boolean;
  setValues(data: TType): void;
  values: TType;
}
