import {
  type UseValueControlledModel,
  type UseValueControlledParamsModel,
} from '@lib/frontend/data/hooks/useValueControlled/useValueControlled.models';
import { useState } from 'react';

export const useValueControlled = <TType,>({
  defaultValue,
  onChange,
  value,
}: UseValueControlledParamsModel<TType> = {}): UseValueControlledModel<TType> => {
  const [valueState, valueStateSet] = useState<TType | undefined>(defaultValue);
  return {
    valueControlled: value ?? valueState,
    valueControlledSet: onChange ?? valueStateSet,
  };
};
