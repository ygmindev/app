import type { FormErrorModel, FormValidatorsModel } from '@lib/frontend/form/form.models';
import { _useForm } from '@lib/frontend/form/hooks/useForm/_useForm';
import type {
  UseFormModel,
  UseFormParamsModel,
} from '@lib/frontend/form/hooks/useForm/useForm.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { CORE } from '@lib/shared/core/core.constants';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { get, isFunction, isPlainObject, reduce, set, unset } from 'lodash';

export const useForm = <TType extends unknown>({
  initialValues,
  onSubmit,
  validators,
}: UseFormParamsModel<TType>): UseFormModel<TType> => {
  const { t } = useTranslation([CORE]);

  const _onSubmit = async (data: TType): Promise<void> => {
    return onSubmit && onSubmit(data);
  };

  const _validate = <TValue,>(
    data?: TValue,
    formValidators?: FormValidatorsModel<TValue>,
  ): FormErrorModel<TType> =>
    reduce(
      formValidators,
      (result, v, k) => {
        if (v) {
          const _value = get(data, k);
          if (isPlainObject(v) && isPlainObject(data)) {
            const error = _validate(_value, v as FormValidatorsModel<typeof _value>);
            return merge({ values: [error, result] });
          }
          if (isFunction(v)) {
            const error = v({ value: _value });
            isEmpty(error) ? unset(result, k) : set(result, k, t(error));
            return result;
          }
        }
        return result;
      },
      {},
    );

  return _useForm({
    initialValues,
    onSubmit: _onSubmit,
    onValidate: (data) => _validate(data, validators),
  });
};