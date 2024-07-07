import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { Slider } from '@lib/frontend/core/components/Slider/Slider';
import { type SliderPropsModel } from '@lib/frontend/core/components/Slider/Slider.models';

export const props: LibraryPropsModel<SliderPropsModel> = {
  Component: Slider,
  defaultProps: {},
  variants: [],
};
