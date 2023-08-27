import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type ValuePropsModel } from '#lib-frontend/form/form.models';
import { type RangeModel } from '#lib-shared/form/form.models';

export type _SliderPropsModel = ValuePropsModel<RangeModel<number>> & {
  backgroundColor: string;
  fontColor: string;
  isDisabled?: boolean;
  isRange?: boolean;
  lower?: number;
  markerColor: string;
  markerSize: number;
  maxIcon: IconPropsModel['icon'];
  minIcon: IconPropsModel['icon'];
  step?: number;
  upper?: number;
  valueIcon: IconPropsModel['icon'];
};
