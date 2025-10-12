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
import { useState } from 'react';

export const useForm = <TType, TResult = void>({
  initialValues,
  isBlocking = true,
  isValidateChanged,
  isValidateOnChange,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  onValidate,
  redirect,
  successMessage,
  validators,
}: UseFormParamsModel<TType, TResult>): UseFormModel<TType, TResult> => {
  const { t } = useTranslation();
  const { handleError } = useErrorContext();
  const validate = useValidator();
  const { success } = useNotification();
  const { replace } = useRouter();
  const [isAppLoading, isAppLoadingSet] = useStore('app.isLoading');
  const [isLoading, isLoadingSet] = useState<boolean>();

  const handleSubmit = async (values: TType): Promise<TResult | null> => {
    try {
      isLoadingSet(true);
      form.errorsSet(undefined);
      const valuesF = cleanObject(values);
      if (isValidateChanged && isEqual<Partial<TType>>(valuesF, initialValues)) {
        const error = Error(t('core:validateChanged'));
        onError ? onError(error) : handleError(error);
      }
      isBlocking && isAppLoadingSet(true);
      const data = await onSubmit?.(valuesF);
      await onSuccess?.(valuesF, data);
      if (successMessage) {
        const notification = successMessage(values);
        void success({
          ...notification,
          description: t(notification.description),
          title: t(notification.title),
        });
      }
      redirect && replace(redirect);
      return data ?? null;
    } catch (e) {
      logger.error(e);
      onError ? onError(e as Error) : handleError(e as Error);
    } finally {
      isBlocking && isAppLoadingSet(false);
      isLoadingSet(false);
      onComplete?.();
    }
    return null;
  };

  const form = _useForm<TType, TResult>({
    initialValues,
    isValidateOnChange,
    onSubmit: handleSubmit,
    onValidate: async (data) => {
      const error = validate({ data, validators });
      onValidate?.(error);
      return error;
    },
  });

  return {
    ...form,
    isLoading: isAppLoading || isLoading,
    isValid: !validators || !form.errors || form.isValid,
  };
};
