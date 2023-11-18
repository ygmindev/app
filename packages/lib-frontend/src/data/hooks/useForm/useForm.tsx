import { useErrorContext } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext';
import { type FormInputModel } from '#lib-frontend/data/data.models';
import { _useForm } from '#lib-frontend/data/hooks/useForm/_useForm';
import {
  type UseFormModel,
  type UseFormParamsModel,
} from '#lib-frontend/data/hooks/useForm/useForm.models';
import { useValidator } from '#lib-frontend/data/hooks/useValidator/useValidator';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { isEqual } from '#lib-shared/core/utils/isEqual/isEqual';
import { error } from '#lib-shared/logging/utils/logger/logger';

export const useForm = <TType, TResult = void, TInput extends FormInputModel<TType> = TType>({
  initialValues,
  isBlocking = true,
  isValidateChanged,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  onTransform,
  validators,
}: UseFormParamsModel<TType, TResult, TInput>): UseFormModel<TType, TResult, TInput> => {
  const { t } = useTranslation();
  const { handleError } = useErrorContext();
  const validate = useValidator();
  const actions = useActions();

  const handleSubmit = async (values: TType): Promise<TResult | null> => {
    try {
      isValidateChanged &&
        isEqual(values, initialValues) &&
        handleError(Error(t('core:validateChanged')));
      isBlocking && actions?.app.isLoadingSet(true);
      const data = onSubmit && (await onSubmit(values));
      onSuccess && (await onSuccess(values, data));
      return data ?? null;
    } catch (e) {
      error(e);
      onError ? onError(e as Error) : handleError(e as Error);
    } finally {
      isBlocking && actions?.app.isLoadingSet(false);
      onComplete && onComplete();
    }
    return null;
  };

  return _useForm<TType, TResult, TInput>({
    initialValues,
    onSubmit: handleSubmit,
    onTransform,
    onValidate: async (data) => validate({ data, validators }),
  });
};
