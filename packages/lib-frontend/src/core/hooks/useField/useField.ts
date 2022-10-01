import type {
  UseFieldModel,
  UseFieldParamsModel,
} from '@lib/frontend/core/hooks/useField/useField.models';
import { useState } from 'react';

export const useField = <TType>({
  defaultValue,
  onChange,
  value,
}: UseFieldParamsModel<TType>): UseFieldModel<TType> => {
  const [valueState, setValueState] = useState<TType>(defaultValue);
  return {
    fieldValue: value === undefined ? valueState : value,
    setFieldValue: onChange === undefined ? setValueState : onChange,
  };
};
