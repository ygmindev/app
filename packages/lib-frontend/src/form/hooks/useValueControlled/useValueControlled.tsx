import { useState } from 'react';

import {
  type UseValueControlledModel,
  type UseValueControlledParamsModel,
} from '#lib-frontend/form/hooks/useValueControlled/useValueControlled.models';

export const useValueControlled = <TType,>({
  defaultValue,
  onChange,
  value,
}: UseValueControlledParamsModel<TType>): UseValueControlledModel<TType> => {
  const [valueState, valueStateSet] = useState<TType | undefined>(defaultValue);
  return {
    valueControlled: value ?? valueState,
    valueControlledSet: onChange ?? valueStateSet,
  };
};
