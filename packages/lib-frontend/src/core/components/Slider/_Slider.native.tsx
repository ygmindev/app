import { type _SliderPropsModel } from '#lib-frontend/core/components/Slider/_Slider.models';
import { type SliderProps } from 'Slider';
import { Slider } from 'Slider';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';

export const _Slider = composeComponent<_SliderPropsModel, SliderProps>({
  Component: Slider,

  getProps: ({ children }) => ({
    children,
  }),
});
