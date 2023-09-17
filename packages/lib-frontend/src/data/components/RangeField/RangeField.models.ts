import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type RANGE_TYPE } from '#lib-frontend/data/components/RangeField/RangField.constants';
import { type FieldPropsModel, type NumberUnitModel } from '#lib-frontend/data/data.models';
import { type ScaledNumberRangeModel } from '#lib-shared/data/resources/ScaledNumberRange/ScaledNumberRange.models';

export type RangeFieldPropsModel<TType extends NumberUnitModel> = FieldPropsModel<
  ScaledNumberRangeModel<TType>
> & {
  unitOptions: Array<TranslatableOptionModel<TType>>;
};

export type RangeTypeModel = `${RANGE_TYPE}`;
