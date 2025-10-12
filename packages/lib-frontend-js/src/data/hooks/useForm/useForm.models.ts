import {
  type AsyncPropsModel,
  type FormErrorModel,
  type FormValidatorsModel,
} from '@lib/frontend/data/data.models';
import {
  type _UseFormModel,
  type _UseFormParamsModel,
} from '@lib/frontend/data/hooks/useForm/_useForm.models';
import { type NotificationModel } from '@lib/frontend/notification/notification.models';
import { type LocationModel } from '@lib/frontend/route/route.models';

export type UseFormParamsModel<TType, TResult = void> = AsyncPropsModel &
  Pick<
    _UseFormParamsModel<TType, TResult>,
    'initialValues' | 'isValidateOnChange' | 'onSubmit' | 'onSuccess' | 'onComplete' | 'onError'
  > & {
    isValidateChanged?: boolean;
    redirect?: LocationModel<unknown>;
    validators?: FormValidatorsModel<TType>;
    onValidate?(errors?: FormErrorModel<TType>): void;
    successMessage?(values?: TType): NotificationModel;
  };

export type UseFormModel<TType, TResult = void> = _UseFormModel<TType, TResult> & {
  isLoading?: boolean;
};
