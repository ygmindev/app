import { _Slider } from '#lib-frontend/core/components/Slider/_Slider';
import { type _SliderPropsModel } from '#lib-frontend/core/components/Slider/_Slider.models';
import { type SliderPropsModel } from '#lib-frontend/core/components/Slider/Slider.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const Slider = composeComponent<SliderPropsModel, _SliderPropsModel>({
  Component: _Slider,

  getProps: ({ children }) => ({
    children,
  }),
});

process.env.APP_IS_DEBUG && (Slider.displayName = variableName({ Slider }));
