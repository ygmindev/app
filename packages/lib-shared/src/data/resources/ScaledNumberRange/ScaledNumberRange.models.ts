import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { type RangeModel } from '#lib-shared/data/data.models';

export type ScaledNumberRangeModel<TType extends NumberUnitModel> = RangeModel<number> & {
  unit?: TType;
};
