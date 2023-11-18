import { type RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import {
  type FieldPropsModel,
  type NumberUnitModel,
  type NumberUnitTypeModel,
  type ScaledRangeModel,
} from '#lib-frontend/data/data.models';

export type RangeFieldPropsModel<TType extends NumberUnitModel> = FieldPropsModel<
  ScaledRangeModel<TType>
> & {
  rangeType?: RangeTypeModel;
  type?: NumberUnitTypeModel;
};

export type RangeTypeModel = `${RANGE_TYPE}`;
