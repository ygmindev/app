import type {
  UseFieldParamsModel,
  UseFieldValueModel,
} from '@lib/frontend/form/hooks/useField/useField.models';
import { useState } from 'react';

export const useFieldValue = <TType extends string = string>({
  defaultValue,
  onChange,
  value,
}: UseFieldParamsModel<TType>): UseFieldValueModel<TType> => {
  const [valueState, setValueState] = useState<TType>(defaultValue || ('' as TType));
  return {
    fieldValue: value === undefined ? valueState : value,
    setFieldValue: onChange === undefined ? setValueState : onChange,
  };
};
