import {
  type AsyncPropsModel,
  type FormInputModel,
  type FormValidatorsModel,
} from '#lib-frontend/data/data.models';
import {
  type _UseFormModel,
  type _UseFormParamsModel,
} from '#lib-frontend/data/hooks/useForm/_useForm.models';

export type UseFormParamsModel<
  TType,
  TResult = void,
  TInput extends FormInputModel<TType> = TType,
> = AsyncPropsModel &
  Pick<
    _UseFormParamsModel<TType, TResult, TInput>,
    'initialValues' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError' | 'onTransform'
  > & {
    isValidateChanged?: boolean;
    validators?: FormValidatorsModel<TType>;
  };

export type UseFormModel<
  TType,
  TResult = void,
  TInput extends FormInputModel<TType> = TType,
> = _UseFormModel<TInput, TResult, TInput>;
