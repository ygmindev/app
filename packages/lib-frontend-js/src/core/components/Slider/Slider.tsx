import { _Slider } from '@lib/frontend/core/components/Slider/_Slider';
import { type SliderPropsModel } from '@lib/frontend/core/components/Slider/Slider.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type NumberRangeModel } from '@lib/model/data/NumberRange/NumberRange.models';
import toString from 'lodash/toString';

export const Slider: LFCModel<SliderPropsModel> = ({
  defaultValue,
  elementState,
  formatter,
  isRange,
  lower,
  onChange,
  step,
  upper,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { valueControlled, valueControlledSet } = useValueControlled<NumberRangeModel>({
    defaultValue,
    onChange,
    value,
  });
  return (
    <Wrapper
      {...wrapperProps}
      mHorizontal={theme.shape.size[THEME_SIZE.SMALL] / 2}>
      <_Slider
        backgroundColor={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MUTED]}
        fontColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN]}
        isDisabled={elementState === ELEMENT_STATE.DISABLED}
        isRange={isRange}
        lower={lower}
        markerColor={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN]}
        markerSize={theme.shape.size[THEME_SIZE_MORE.XSMALL]}
        onChange={valueControlledSet}
        step={step}
        upper={upper}
        value={valueControlled}
        valueIcon="chevronHorizontal"
      />

      <Wrapper
        isAlign
        isDistribute
        isRow>
        {lower !== undefined && (
          <Text align={FONT_ALIGN.LEFT}>{formatter ? formatter(lower) : toString(lower)}</Text>
        )}

        {lower !== undefined && (
          <Text align={FONT_ALIGN.RIGHT}>{formatter ? formatter(upper) : toString(upper)}</Text>
        )}
      </Wrapper>
    </Wrapper>
  );
};
