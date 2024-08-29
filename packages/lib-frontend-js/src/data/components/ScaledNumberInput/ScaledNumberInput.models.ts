import { type NumberInputPropsModel } from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';
import {
  type NumberUnitModel,
  type NumberUnitTypeModel,
} from '@lib/shared/data/utils/numberFormat/numberFormat.models';

export type ScaledNumberInputPropsModel<TType extends NumberUnitModel> = InputPropsModel<number> &
  Pick<NumberInputPropsModel, 'keyboard'> & {
    defaultUnit?: TType;
    type?: NumberUnitTypeModel;
  };
