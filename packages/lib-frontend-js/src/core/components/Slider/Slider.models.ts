import { type _SliderPropsModel } from '@lib/frontend/core/components/Slider/_Slider.models';

export type SliderPropsModel = Omit<
  _SliderPropsModel,
  | 'backgroundColor'
  | 'fontColor'
  | 'markerColor'
  | 'markerSize'
  | 'maxIcon'
  | 'minIcon'
  | 'valueIcon'
> & { formatter?(value?: number): string | undefined };
