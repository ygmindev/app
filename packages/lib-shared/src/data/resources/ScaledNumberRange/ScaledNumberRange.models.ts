import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { type RangeModel, type ScaledNumberModel } from '#lib-shared/data/data.models';

export type ScaledNumberRangeModel<TType extends NumberUnitModel> = RangeModel<
  ScaledNumberModel<TType>
>;
