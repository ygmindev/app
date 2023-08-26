import { _Slider } from '#lib-frontend/core/components/Slider/_Slider';
import { type SliderPropsModel } from '#lib-frontend/core/components/Slider/Slider.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/form/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '#lib-frontend/style/style.constants';

export const Slider: LFCModel<SliderPropsModel> = ({
  defaultMax,
  defaultValue,
  elementState,
  isRange,
  lower,
  max,
  onChange,
  onChangeMax,
  step,
  upper,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { valueControlled, valueControlledSet } = useValueControlled<number>({
    defaultValue,
    onChange,
    value,
  });
  const { valueControlled: maxControlled, valueControlledSet: maxControlledSet } =
    useValueControlled<number>({ defaultValue: defaultMax, onChange: onChangeMax, value: max });
  return (
    <Wrapper
      {...wrapperProps}
      p>
      <_Slider
        backgroundColor={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MUTED]}
        fontColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN]}
        isDisabled={elementState === ELEMENT_STATE.DISABLED}
        isRange={isRange}
        lower={lower}
        markerColor={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN]}
        markerSize={theme.shape.size[THEME_SIZE.SMALL]}
        max={maxControlled}
        maxIcon="chevronRight"
        minIcon="chevronLeft"
        onChange={valueControlledSet}
        onChangeMax={maxControlledSet}
        step={step}
        upper={upper}
        value={valueControlled}
        valueIcon="chevronHorizontal"
      />
    </Wrapper>
  );
};
