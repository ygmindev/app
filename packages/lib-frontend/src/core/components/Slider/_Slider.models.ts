import { type IconPropsModel } from '#lib-frontend/core/components/Icon/Icon.models';
import { type ValuePropsModel } from '#lib-frontend/form/form.models';

export type _SliderPropsModel = ValuePropsModel<number> & {
  backgroundColor: string;
  defaultMax?: number;
  fontColor: string;
  isDisabled?: boolean;
  isRange?: boolean;
  lower: number;
  markerColor: string;
  markerSize: number;
  max?: number;
  maxIcon: IconPropsModel['icon'];
  minIcon: IconPropsModel['icon'];
  onChangeMax?(value: number): void;
  step: number;
  upper: number;
  valueIcon: IconPropsModel['icon'];
};
