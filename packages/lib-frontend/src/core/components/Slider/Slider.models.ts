import { type _SliderPropsModel } from '#lib-frontend/core/components/Slider/_Slider.models';

export type SliderPropsModel = Omit<
  _SliderPropsModel,
  | 'backgroundColor'
  | 'fontColor'
  | 'markerColor'
  | 'markerSize'
  | 'maxIcon'
  | 'minIcon'
  | 'valueIcon'
> & {
  lowerFormatter?(value?: number): string;
  upperFormatter?(value?: number): string;
};
