import type { FormValidatorsModel } from '@lib/frontend/form/form.models';
import type {
  _UseFormModel,
  _UseFormParamsModel,
} from '@lib/frontend/form/hooks/useForm/_useForm.models';

export interface UseFormParamsModel<TType = void, TResult = void>
  extends Pick<
    _UseFormParamsModel<TType, TResult>,
    'initialValues' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
  > {
  isBlocking?: boolean;
  validators?: FormValidatorsModel<TType>;
}

export interface UseFormModel<TType = void, TResult = void> extends _UseFormModel<TType, TResult> {}
