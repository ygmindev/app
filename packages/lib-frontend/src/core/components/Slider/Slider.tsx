import { _Slider } from '#lib-frontend/core/components/Slider/_Slider';
import { type SliderPropsModel } from '#lib-frontend/core/components/Slider/Slider.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '#lib-frontend/style/style.constants';

export const Slider: LFCModel<SliderPropsModel> = ({ lower, step, upper, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      p>
      <_Slider
        backgroundColor={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MUTED]}
        fontColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN]}
        lower={lower}
        markerColor={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN]}
        markerSize={theme.shape.size[THEME_SIZE.SMALL]}
        maxIcon="chevronRight"
        minIcon="chevronLeft"
        step={step}
        upper={upper}
        valueIcon="chevronHorizontal"
      />
    </Wrapper>
  );
};
