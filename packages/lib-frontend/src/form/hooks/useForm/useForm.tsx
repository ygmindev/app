import { useErrorContext } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext';
import type { FormErrorModel, FormValidatorsModel } from '#lib-frontend/form/form.models';
import { _useForm } from '#lib-frontend/form/hooks/useForm/_useForm';
import type {
  UseFormModel,
  UseFormParamsModel,
} from '#lib-frontend/form/hooks/useForm/useForm.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import type { TranslatableTextModel } from '#lib-frontend/locale/locale.models';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { isEmpty } from '#lib-shared/core/utils/isEmpty/isEmpty';
import { merge } from '#lib-shared/core/utils/merge/merge';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import reduce from 'lodash/reduce';

export const useForm = <TType = void, TResult = void>({
  beforeSubmit,
  initialValues,
  isBlocking = true,
  onComplete,
  onError,
  onSubmit,
  onSuccess,
  validators,
}: UseFormParamsModel<TType, TResult>): UseFormModel<TType, TResult> => {
  const { t } = useTranslation();
  const { handleError } = useErrorContext();
  const actions = useActions();

  const validate = <TValue,>(
    data?: TValue,
    formValidators?: FormValidatorsModel<TValue>,
  ): FormErrorModel<TType> =>
    reduce(
      formValidators,
      (result, v, k) => {
        if (v) {
          const value = (data as Record<string, TValue[keyof TValue]>)[k];
          if (isPlainObject(v) && isPlainObject(data)) {
            const error = validate(value, v as FormValidatorsModel<typeof value>);
            return merge<FormErrorModel<TType>>([error, result]);
          }
          if (isFunction(v)) {
            const error = v({ data, value });
            if (isEmpty(error)) {
              delete (result as Record<string, unknown>)[k];
            } else {
              (result as Record<string, unknown>)[k] = t(error as TranslatableTextModel);
            }
            return result;
          }
        }
        return result;
      },
      {} as FormErrorModel<TType>,
    );

  const handleSubmit = async (values: TType): Promise<TResult | null> => {
    try {
      isBlocking && actions?.app.isLoadingSet(true);
      const valuesF = beforeSubmit ? await beforeSubmit(values) : values;
      const data = onSubmit && (await onSubmit(valuesF));
      data && onSuccess && (await onSuccess(values, data));
      return data || null;
    } catch (e) {
      console.warn(e);
      onError ? onError(e as Error) : handleError(e as Error);
    } finally {
      isBlocking && actions?.app.isLoadingSet(false);
      onComplete && onComplete();
    }
    return null;
  };

  return _useForm<TType, TResult>({
    initialValues,
    onSubmit: handleSubmit,
    onValidate: async (data) => validate(data, validators),
  });
};
