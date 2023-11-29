import { type NUMBER_RANGE_TYPE } from '#lib-frontend/data/components/NumberRangeField/NumberRangeField.constants';
import {
  type FieldPropsModel,
  type FieldRefModel,
  type NumberUnitModel,
  type NumberUnitTypeModel,
} from '#lib-frontend/data/data.models';
import { type NumberRangeModel } from '#lib-shared/data/resources/NumberRange/NumberRange.models';

export type NumberRangeFieldPropsModel<TType extends NumberUnitModel> =
  FieldPropsModel<NumberRangeModel> & {
    defaultUnit?: TType;
    rangeType?: NumberRangeTypeModel;
    type?: NumberUnitTypeModel;
  };

export type NumberRangeTypeModel = `${NUMBER_RANGE_TYPE}`;

export type NumberRangeFieldRefModel = FieldRefModel;
