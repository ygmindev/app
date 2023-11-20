import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import {
  type UseValueControlledModel,
  type UseValueControlledParamsModel,
} from '#lib-frontend/data/hooks/useValueControlled/useValueControlled.models';

export type UseValueScaledParamsModel<TType extends NumberUnitModel> =
  UseValueControlledParamsModel<number> & {
    defaultUnit?: TType;
  };

export type UseValueScaledModel<TType extends NumberUnitModel> = Omit<
  UseValueControlledModel<number>,
  'valueControlledSet'
> & {
  unit?: TType;
  unitSet(value?: TType): void;
  valueControlledSet(value?: number, unit?: TType): void;
  valueScaled?: number;
};
