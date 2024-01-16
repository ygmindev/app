import { type AsyncPropsModel, type FormValidatorsModel } from '@lib-frontend/data/data.models';
import {
  type _UseFormModel,
  type _UseFormParamsModel,
} from '@lib-frontend/data/hooks/useForm/_useForm.models';
import { type TranslatableTextModel } from '@lib-frontend/locale/locale.models';
import { type LocationModel } from '@lib-frontend/route/route.models';

export type UseFormParamsModel<TType, TResult = void> = AsyncPropsModel &
  Pick<
    _UseFormParamsModel<TType, TResult>,
    'initialValues' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
  > & {
    isValidateChanged?: boolean;
    redirect?: LocationModel;
    successMessage?: TranslatableTextModel;
    validators?: FormValidatorsModel<TType>;
  };

export type UseFormModel<TType, TResult = void> = _UseFormModel<TType, TResult>;
