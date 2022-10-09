import { _useForm } from '@lib/frontend/core/hooks/useForm/_useForm';
import type {
  FormErrorModel,
  UseFormModel,
  UseFormParamsModel,
} from '@lib/frontend/core/hooks/useForm/useForm.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { get, isFunction, isPlainObject, isString, reduce, set, unset, values } from 'lodash';
import { useState } from 'react';

export const useForm = <TType>({
  initialValues,
  onSubmit,
  validators,
}: UseFormParamsModel<TType>): UseFormModel<TType> => {
  const _validate = <TValue, TValidators>(
    data?: TValue,
    formValidators?: TValidators,
    isCheckEmpty?: boolean,
  ): FormErrorModel<TType> =>
    reduce(
      formValidators as Record<string, unknown>,
      (result, v, k) => {
        if (v) {
          const _value = get(data, k);
          if (isPlainObject(v) && isPlainObject(data)) {
            const error = _validate(_value, v);
            return error && !isEmpty(error)
              ? merge<FormErrorModel<TType>>({ values: [error, result] })
              : result;
          }
          if (isFunction(v)) {
            const error = isCheckEmpty
              ? isEmpty(_value)
              : (v as CallableModel<Array<unknown>>)(_value);
            error || (isString(error) && (error as string).length)
              ? set(result, k, error)
              : unset(result, k);
            return result;
          }
        }
        return result;
      },
      {},
    );

  const _isFilled = <TType>(data: TType): boolean =>
    isPlainObject(data)
      ? Object.keys(data as unknown as object).every((k) => {
          const value = get(data, k);
          const isEmpty = isPlainObject(value) ? !_isFilled(value) : value;
          return !isEmpty;
        })
      : isEmpty(data);

  const [emptyState, setEmptyState] = useState<FormErrorModel<TType>>(
    _validate(initialValues, validators, true),
  );

  const { handleChange, ...output } = _useForm({
    initialValues,
    onSubmit,
    onValidate: (data) => _validate(data, validators),
  });

  return {
    ...output,
    handleChange: (key) => (value) => {
      const newEmptyState = emptyState;
      isEmpty(value) ? set(newEmptyState, key, true) : unset(newEmptyState, key);
      setEmptyState(newEmptyState);
      handleChange(key)(value);
    },
    isEmpty: values(output.values).every(isEmpty),
    isFilled: _isFilled(emptyState),
  };
};
