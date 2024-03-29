import { type FormErrorModel, type FormValidatorsModel } from '@lib/frontend/data/data.models';
import { type UseValidatorModel } from '@lib/frontend/data/hooks/useValidator/useValidator.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type UseTranslationModel } from '@lib/frontend/locale/hooks/useTranslation/useTranslation.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { merge } from '@lib/shared/core/utils/merge/merge';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import reduce from 'lodash/reduce';

const validate = <TType,>({
  data,
  t,
  validators,
}: Pick<UseTranslationModel, 't'> & {
  data?: TType;
  validators?: FormValidatorsModel<TType>;
}): FormErrorModel<TType> => {
  const errors = reduce(
    validators,
    (result, v, k) => {
      if (v) {
        const value = (data as Record<string, TType[keyof TType]>)[k];
        if (isPlainObject(v) && isPlainObject(data)) {
          const error = validate({
            data: value,
            t,
            validators: v as FormValidatorsModel<typeof value>,
          });
          return merge<FormErrorModel<TType>>([error as FormErrorModel<TType>, result]);
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
  return isEmpty(errors) ? undefined : errors;
};

export const useValidator = <TType,>(): UseValidatorModel<TType> => {
  const { t } = useTranslation();
  return ({ data, validators }) => (validators || data ? validate({ data, t, validators }) : {});
};
