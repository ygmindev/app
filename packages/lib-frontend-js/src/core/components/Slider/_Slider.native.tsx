// TODO: react native slider
import { type MultiSliderProps } from '@ptomasroos/react-native-multi-slider';

import { type _SliderPropsModel } from '@lib/frontend/core/components/Slider/_Slider.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _Slider = composeComponent<_SliderPropsModel, MultiSliderProps>({
  Component: MultiSlider,

  getProps: ({ values }) => ({
    values,
  }),
});
