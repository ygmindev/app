import { type RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import { type FieldPropsModel, type NumberUnitModel } from '#lib-frontend/data/data.models';
import { type ScaledNumberUnitModel } from '#lib-shared/data/resources/ScaledNumber/ScaledNumber.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

export type RangeFieldPropsModel<TType extends NumberUnitModel> = FieldPropsModel<
  ScaledNumberRangeModel<TType>
> & {
  rangeType?: RangeTypeModel;
  type?: ScaledNumberUnitModel;
};

export type RangeTypeModel = `${RANGE_TYPE}`;
