import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import { type RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import { type ValuePropsModel } from '#lib-frontend/data/data.models';
import { type FIELD_TYPE_MORE } from '#lib-shared/data/data.constants';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

export type RangeFieldPropsModel = ValuePropsModel<ScaledNumberRangeModel> & {
  defaultUnit: NumberUnitModel;
} & ({ type: FIELD_TYPE_MORE.AMOUNT } | { type: FIELD_TYPE_MORE.RELATIVE_DATE });

export type RangeTypeModel = `${RANGE_TYPE}`;
