import type {
  UseControlledValueModel,
  UseControlledValueParamsModel,
} from '@lib/frontend/form/hooks/useControlledValue/useControlledValue.models';
import { useState } from 'react';

export const useControlledValue = <TType = string,>({
  defaultValue,
  onChange,
  value,
}: UseControlledValueParamsModel<TType>): UseControlledValueModel<TType> => {
  const [valueState, setValueState] = useState<TType>(defaultValue || ('' as TType));
  return {
    setValueControlled: onChange === undefined ? setValueState : onChange,
    valueControlled: value === undefined ? valueState : value,
  };
};
