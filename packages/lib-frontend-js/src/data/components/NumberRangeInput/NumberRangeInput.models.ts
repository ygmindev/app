import { type NUMBER_RANGE_TYPE } from '@lib/frontend/data/components/NumberRangeInput/NumberRangeInput.constants';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type NUMBER_UNIT_TYPE } from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import { type NumberUnitModel } from '@lib/shared/data/utils/numberFormat/numberFormat.models';
import { type NumberRangeModel } from '@lib/shared/data/utils/NumberRange/NumberRange.models';

export type NumberRangeInputPropsModel<TType extends NumberUnitModel> =
  InputPropsModel<NumberRangeModel> & {
    defaultUnit?: TType;
    rangeType?: NUMBER_RANGE_TYPE;
    type?: NUMBER_UNIT_TYPE;
  };

export type NumberRangeInputRefModel = InputRefModel;
