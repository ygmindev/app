import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type ValuePropsModel } from '@lib/frontend/data/data.models';
import { type NumberRangeModel } from '@lib/model/data/NumberRange/NumberRange.models';

export type _SliderPropsModel = ValuePropsModel<NumberRangeModel> & {
  backgroundColor: string;
  fontColor: string;
  isDisabled?: boolean;
  isRange?: boolean;
  lower?: number;
  markerColor: string;
  markerSize: number;
  step?: number;
  upper?: number;
  valueIcon: IconPropsModel['icon'];
};
