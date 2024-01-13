import { useErrorContext } from '@lib-frontend/core/hooks/useErrorContext/useErrorContext';
import { _useForm } from '@lib-frontend/data/hooks/useForm/_useForm';
import {
  type UseFormModel,
  type UseFormParamsModel,
} from '@lib-frontend/data/hooks/useForm/useForm.models';
import { useValidator } from '@lib-frontend/data/hooks/useValidator/useValidator';
import { useTranslation } from '@lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib-frontend/state/hooks/useStore/useStore';
import { isEqual } from '@lib-shared/core/utils/isEqual/isEqual';
import { error } from '@lib-shared/logging/utils/logger/logger';

export const useForm = <TType, TResult = void>({
  initialValues,
  isBlocking = true,
  isValidateChanged,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  validators,
}: UseFormParamsModel<TType, TResult>): UseFormModel<TType, TResult> => {
  const { t } = useTranslation();
  const { handleError } = useErrorContext();
  const validate = useValidator();
  const [, isLoadingSet] = useStore('app.isLoading');

  const handleSubmit = async (values: TType): Promise<TResult | null> => {
    try {
      isValidateChanged &&
        isEqual(values, initialValues) &&
        handleError(Error(t('core:validateChanged')));
      isBlocking && isLoadingSet(true);
      const data = onSubmit && (await onSubmit(values));
      onSuccess && (await onSuccess(values, data));
      return data ?? null;
    } catch (e) {
      error(e);
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
    onValidate: async (data) => validate({ data, validators }),
  });
};
