import type {
  UseControlledValueModel,
  UseControlledValueParamsModel,
} from '@lib/frontend/form/hooks/useControlledValue/useControlledValue.models';
import { useState } from 'react';

export const useControlledValue = <TType extends string = string>({
  defaultValue,
  onChange,
  value,
}: UseControlledValueParamsModel<TType>): UseControlledValueModel<TType> => {
  const [valueState, valueStateSet] = useState<TType>(defaultValue || ('' as TType));
  return {
    valueControlledSet: onChange === undefined ? valueStateSet : onChange,
    valueControlled: value === undefined ? valueState : value,
  };
};
