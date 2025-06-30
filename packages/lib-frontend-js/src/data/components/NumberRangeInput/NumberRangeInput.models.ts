import { type NUMBER_RANGE_TYPE } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.constants';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type NumberRangeModel } from '@lib/model/data/NumberRange/NumberRange.models';
import {
  type NumberUnitModel,
  type NumberUnitTypeModel,
} from '@lib/shared/data/utils/numberFormat/numberFormat.models';

export type NumberRangeInputPropsModel<TType extends NumberUnitModel> =
  InputPropsModel<NumberRangeModel> & {
    defaultUnit?: TType;
    rangeType?: NumberRangeTypeModel;
    type?: NumberUnitTypeModel;
  };

export type NumberRangeTypeModel = `${NUMBER_RANGE_TYPE}`;

export type NumberRangeInputRefModel = InputRefModel;
