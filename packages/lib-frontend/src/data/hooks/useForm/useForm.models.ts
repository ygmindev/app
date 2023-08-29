import { type FormValidatorsModel } from '#lib-frontend/data/data.models';
import {
  type _UseFormModel,
  type _UseFormParamsModel,
} from '#lib-frontend/data/hooks/useForm/_useForm.models';

export type UseFormParamsModel<TType, TResult = void> = {
  isBlocking?: boolean;
  validators?: FormValidatorsModel<TType>;
} & Pick<
  _UseFormParamsModel<TType, TResult>,
  'initialValues' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
>;

export type UseFormModel<TType, TResult = void> = _UseFormModel<TType, TResult>;
