import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';
import type { FormErrorModel, FormValidatorsModel } from '@lib/frontend/form/form.models';
import { _useForm } from '@lib/frontend/form/hooks/useForm/_useForm';
import type {
  UseFormModel,
  UseFormParamsModel,
} from '@lib/frontend/form/hooks/useForm/useForm.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { merge } from '@lib/shared/core/utils/merge/merge';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import reduce from 'lodash/reduce';

export const useForm = <TType extends unknown>({
  initialValues,
  onError,
  onSubmit,
  validators,
}: UseFormParamsModel<TType>): UseFormModel<TType> => {
  const { t } = useTranslation();
  const { handleError } = useErrorBoundary();

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
            return merge<FormErrorModel<TType>>({ values: [error, result] });
          }
          if (isFunction(v)) {
            const error = v({ value: _value });
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

  const _handleSubmit = async (data: TType): Promise<void> => {
    try {
      onSubmit && (await onSubmit(data));
    } catch (e) {
      console.warn(e);
      onError ? onError(e as Error) : handleError(e as Error);
    }
  };

  return _useForm({
    initialValues,
    onSubmit: _handleSubmit,
    onValidate: async (data) => _validate(data, validators),
  });
};
