import { type RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import {
  type AmountUnitModel,
  type RelativeDateUnitModel,
  type ValuePropsModel,
} from '#lib-frontend/data/data.models';
import { type DATA_TYPE_MORE } from '#lib-shared/data/data.constants';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

export type RangeFieldPropsModel =
  | (ValuePropsModel<ScaledNumberRangeModel<AmountUnitModel>> & {
      defaultUnit: AmountUnitModel;
      type: DATA_TYPE_MORE.AMOUNT;
    })
  | (ValuePropsModel<ScaledNumberRangeModel<RelativeDateUnitModel>> & {
      defaultUnit: RelativeDateUnitModel;
      type: DATA_TYPE_MORE.RELATIVE_DATE;
    });

export type RangeTypeModel = `${RANGE_TYPE}`;
