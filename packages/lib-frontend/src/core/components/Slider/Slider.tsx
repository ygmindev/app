import toString from 'lodash/toString';

import { _Slider } from '#lib-frontend/core/components/Slider/_Slider';
import { type SliderPropsModel } from '#lib-frontend/core/components/Slider/Slider.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useValueControlled } from '#lib-frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { type RangeModel } from '#lib-shared/data/data.models';

export const Slider: LFCModel<SliderPropsModel> = ({
  defaultValue,
  elementState,
  isRange,
  lower,
  lowerFormatter,
  onChange,
  step,
  upper,
  upperFormatter,
  value,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { valueControlled, valueControlledSet } = useValueControlled<RangeModel<number>>({
    defaultValue,
    onChange,
    value,
  });
  return (
    <Wrapper {...wrapperProps}>
      <_Slider
        backgroundColor={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MUTED]}
        fontColor={theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN]}
        isDisabled={elementState === ELEMENT_STATE.DISABLED}
        isRange={isRange}
        lower={lower}
        markerColor={theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN]}
        markerSize={theme.shape.size[THEME_SIZE.SMALL]}
        maxIcon="chevronRight"
        minIcon="chevronLeft"
        onChange={valueControlledSet}
        step={step}
        upper={upper}
        value={valueControlled}
        valueIcon="chevronHorizontal"
      />

      <Wrapper
        isRowAlign
        justify={FLEX_JUSTIFY.SPACE_BETWEEN}>
        {lower && <Text>{lowerFormatter ? lowerFormatter(lower) : toString(lower)}</Text>}

        {upper && <Text>{upperFormatter ? upperFormatter(upper) : toString(upper)}</Text>}
      </Wrapper>
    </Wrapper>
  );
};
