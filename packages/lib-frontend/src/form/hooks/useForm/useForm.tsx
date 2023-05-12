import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import type { FormErrorModel, FormValidatorsModel } from '@lib/frontend/form/form.models';
import { _useForm } from '@lib/frontend/form/hooks/useForm/_useForm';
import type {
  UseFormModel,
  UseFormParamsModel,
} from '@lib/frontend/form/hooks/useForm/useForm.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { merge } from '@lib/shared/core/utils/merge/merge';
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

  const _validate = <TValue,>(
    data?: TValue,
    formValidators?: FormValidatorsModel<TValue>,
  ): FormErrorModel<TType> =>
    reduce(
      formValidators,
      (result, v, k) => {
        if (v) {
          const _value = (data as Record<string, TValue[keyof TValue]>)[k];
          if (isPlainObject(v) && isPlainObject(data)) {
            const error = _validate(_value, v as FormValidatorsModel<typeof _value>);
            return merge<FormErrorModel<TType>>([error, result]);
          }
          if (isFunction(v)) {
            const error = v({ data, value: _value });
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

  const _handleSubmit = async (values: TType): Promise<TResult | null> => {
    try {
      isBlocking && actions?.app.isLoadingSet(true);
      const _values = beforeSubmit ? await beforeSubmit(values) : values;
      const data = onSubmit && (await onSubmit(_values));
      onSuccess && (await onSuccess(values, data));
      return data || null;
    } catch (e) {
      onError ? onError(e as Error) : handleError(e as Error);
    } finally {
      isBlocking && actions?.app.isLoadingSet(false);
      onComplete && onComplete();
    }
    return null;
  };

  return _useForm<TType, TResult>({
    initialValues,
    onSubmit: _handleSubmit,
    onValidate: async (data) => _validate(data, validators),
  });
};
