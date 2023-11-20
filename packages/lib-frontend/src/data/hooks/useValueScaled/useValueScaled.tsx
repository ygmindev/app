import { useState } from 'react';

import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { useFormatter } from '#lib-frontend/data/hooks/useFormatter/useFormatter';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type UseValueScaledModel,
  type UseValueScaledParamsModel,
} from '#lib-frontend/data/hooks/useValueScaled/useValueScaled.models';

export const useValueScaled = <TType extends NumberUnitModel>({
  defaultUnit,
  defaultValue,
  onChange,
  value,
}: UseValueScaledParamsModel<TType>): UseValueScaledModel<TType> => {
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const { scale } = useFormatter();
  const [unit, unitSet] = useState<TType | undefined>(defaultUnit);
  const [valueScaled, valueScaledSet] = useState<number | undefined>(
    defaultValue ? scale(defaultValue, { isUnscale: true, unit: defaultUnit }) : undefined,
  );
  return {
    unit,
    unitSet,
    valueControlled,
    valueControlledSet: (v, u) => {
      valueScaledSet(v);
      u && unitSet(u);
      valueControlledSet(scale(v, { isUnscale: true, unit: u ?? unit }));
    },
    valueScaled,
  };
};
