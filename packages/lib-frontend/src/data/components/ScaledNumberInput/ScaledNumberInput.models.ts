import { type NumberInputPropsModel } from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import {
  type InputPropsModel,
  type NumberUnitModel,
  type NumberUnitTypeModel,
} from '@lib/frontend/data/data.models';

export type ScaledNumberInputPropsModel<TType extends NumberUnitModel> = InputPropsModel<number> &
  Pick<NumberInputPropsModel, 'keyboard'> & {
    defaultUnit?: TType;
    type?: NumberUnitTypeModel;
  };
