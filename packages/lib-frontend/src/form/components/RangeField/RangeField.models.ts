import { type RANGE_TYPE } from '#lib-frontend/form/components/RangeField/RangField.constants';
import { type ValuePropsModel } from '#lib-frontend/form/form.models';
import { type FIELD_TYPE_MORE } from '#lib-shared/form/form.constants';
import { type ScaledNumberRangeModel } from '#lib-shared/form/resources/ScaledNumberRange/ScaledNumberRange.models';

export type RangeFieldPropsModel = ValuePropsModel<ScaledNumberRangeModel> &
  ({ type: FIELD_TYPE_MORE.AMOUNT } | { type: FIELD_TYPE_MORE.RELATIVE_DATE });

export type RangeTypeModel = `${RANGE_TYPE}`;
