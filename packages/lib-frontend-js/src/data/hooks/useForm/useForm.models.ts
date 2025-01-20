import {
  type AsyncPropsModel,
  type FormErrorModel,
  type FormValidatorsModel,
} from '@lib/frontend/data/data.models';
import {
  type _UseFormModel,
  type _UseFormParamsModel,
} from '@lib/frontend/data/hooks/useForm/_useForm.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type LocationModel } from '@lib/frontend/route/route.models';

export type UseFormParamsModel<TType, TResult = void> = AsyncPropsModel &
  Pick<
    _UseFormParamsModel<TType, TResult>,
    'initialValues' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
  > & {
    isValidateChanged?: boolean;
    onValidate?(errors?: FormErrorModel<TType>): void;
    redirect?: LocationModel<unknown>;
    successMessage?: AsyncTextModel;
    validators?: FormValidatorsModel<TType>;
  };

export type UseFormModel<TType, TResult = void> = _UseFormModel<TType, TResult>;
