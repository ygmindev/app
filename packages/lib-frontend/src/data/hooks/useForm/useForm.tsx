import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import { _useForm } from '@lib/frontend/data/hooks/useForm/_useForm';
import {
  type UseFormModel,
  type UseFormParamsModel,
} from '@lib/frontend/data/hooks/useForm/useForm.models';
import { useValidator } from '@lib/frontend/data/hooks/useValidator/useValidator';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const useForm = <TType, TResult = void>({
  initialValues,
  isBlocking = true,
  isValidateChanged,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  onValidate,
  redirectTo,
  successMessage,
  validators,
}: UseFormParamsModel<TType, TResult>): UseFormModel<TType, TResult> => {
  const { t } = useTranslation();
  const { handleError } = useErrorContext();
  const validate = useValidator();
  const { success } = useNotification();
  const { replace } = useRouter();
  const [, isLoadingSet] = useStore('app.isLoading');

  const handleSubmit = async (values: TType): Promise<TResult | null> => {
    try {
      const valuesF = cleanObject(values);
      if (isValidateChanged && isEqual(valuesF, initialValues)) {
        const error = Error(t('core:validateChanged'));
        onError ? onError(error) : handleError(error);
      }
      isBlocking && isLoadingSet(true);
      const data = onSubmit && (await onSubmit(valuesF));
      onSuccess && (await onSuccess(valuesF, data));
      successMessage && void success({ description: t('core:updatedSuccess') });
      redirectTo && replace(redirectTo);
      return data ?? null;
    } catch (e) {
      logger.error(e);
      onError ? onError(e as Error) : handleError(e as Error);
    } finally {
      isBlocking && isLoadingSet(false);
      onComplete && onComplete();
    }
    return null;
  };

  return _useForm<TType, TResult>({
    initialValues,
    onSubmit: handleSubmit,
    onValidate: async (data) => {
      const error = validate({ data, validators });
      onValidate && onValidate(error);
      return error;
    },
  });
};
