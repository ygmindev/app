import { type NumberUnitModel } from '@lib-frontend/data/data.models';
import {
  type UseValueControlledModel,
  type UseValueControlledParamsModel,
} from '@lib-frontend/data/hooks/useValueControlled/useValueControlled.models';

export type UseValueScaledParamsModel<
  TType extends number | Record<string, number>,
  TUnit extends NumberUnitModel,
> = UseValueControlledParamsModel<TType> & {
  defaultUnit?: TUnit;
};

export type UseValueScaledModel<
  TType extends number | Record<string, number>,
  TUnit extends NumberUnitModel,
> = Omit<UseValueControlledModel<TType>, 'valueControlledSet'> & {
  unit?: TUnit;
  unitSet(value?: TUnit): void;
  valueControlledSet(value?: TType, unit?: TUnit): void;
  valueScaled?: TType;
};
