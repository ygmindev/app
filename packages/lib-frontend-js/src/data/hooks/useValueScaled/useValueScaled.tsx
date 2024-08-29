import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import {
  type UseValueScaledModel,
  type UseValueScaledParamsModel,
} from '@lib/frontend/data/hooks/useValueScaled/useValueScaled.models';
import { type NumberUnitModel } from '@lib/shared/data/utils/numberFormat/numberFormat.models';
import { numberScale } from '@lib/shared/data/utils/numberScale/numberScale';
import isPlainObject from 'lodash/isPlainObject';
import mapValues from 'lodash/mapValues';
import { useState } from 'react';

export const useValueScaled = <
  TType extends number | Record<string, number>,
  TUnit extends NumberUnitModel,
>({
  defaultUnit,
  defaultValue,
  onChange,
  value,
}: UseValueScaledParamsModel<TType, TUnit>): UseValueScaledModel<TType, TUnit> => {
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const [unit, unitSet] = useState<TUnit | undefined>(defaultUnit);

  const valueScale = (v?: TType, u?: TUnit): TType =>
    (isPlainObject(v)
      ? mapValues(v as Record<string, number>, (vv) =>
          numberScale(vv, { isReverse: true, unit: u }),
        )
      : numberScale(v as number, { isReverse: true, unit: u })) as TType;

  const [valueScaled, valueScaledSet] = useState<TType | undefined>(
    defaultValue ? valueScale(defaultValue, defaultUnit) : undefined,
  );
  return {
    unit,
    unitSet,
    valueControlled,
    valueControlledSet: (v, u) => {
      valueScaledSet(v);
      u && unitSet(u);
      valueControlledSet(valueScale(v, u ?? unit));
    },
    valueScaled,
  };
};
