import type { FormValidatorsModel } from '#lib-frontend/form/form.models';
import type {
  _UseFormModel,
  _UseFormParamsModel,
} from '#lib-frontend/form/hooks/useForm/_useForm.models';

export type UseFormParamsModel<TType = void, TResult = void> = {
  isBlocking?: boolean;
  validators?: FormValidatorsModel<TType>;
} & Pick<
  _UseFormParamsModel<TType, TResult>,
  'beforeSubmit' | 'initialValues' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
>;

export type UseFormModel<TType = void, TResult = void> = _UseFormModel<TType, TResult>;
