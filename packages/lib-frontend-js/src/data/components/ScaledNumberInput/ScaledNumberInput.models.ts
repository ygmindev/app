import { type NumberInputPropsModel } from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import { type InputPropsModel } from '@lib/frontend/data/data.models';
import { type NUMBER_UNIT_TYPE } from '@lib/shared/data/utils/numberFormat/numberFormat.constants';
import { type NumberUnitModel } from '@lib/shared/data/utils/numberFormat/numberFormat.models';

export type ScaledNumberInputPropsModel<TType extends NumberUnitModel> = InputPropsModel<number> &
  Pick<NumberInputPropsModel, 'keyboard'> & {
    defaultUnit?: TType;
    type?: NUMBER_UNIT_TYPE;
  };
