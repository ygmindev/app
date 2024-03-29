import 'rc-slider/assets/index.css';

import isArray from 'lodash/isArray';
import Slider from 'rc-slider';

import { type _SliderPropsModel } from '@lib/frontend/core/components/Slider/_Slider.models';
import { type SFCModel } from '@lib/frontend/core/core.models';

export const _Slider: SFCModel<_SliderPropsModel> = ({
  backgroundColor,
  fontColor,
  isDisabled,
  isRange,
  lower,
  markerColor,
  markerSize,
  onChange,
  step = 1,
  upper,
  value,
  valueIcon,
}) => (
  <Slider
    allowCross={false}
    disabled={isDisabled}
    handleStyle={{
      backgroundColor: markerColor,
      border: 'none',
      boxShadow: 'none',
      height: markerSize,
      opacity: 1.0,
      width: markerSize,
    }}
    max={upper}
    min={lower}
    onChange={(v) => onChange && onChange(isArray(v) ? { max: v[1], min: v[0] } : { min: v })}
    railStyle={{ backgroundColor, bottom: 0, margin: 'auto', top: 0 }}
    range={isRange}
    step={step}
    style={{ height: markerSize }}
    tabIndex={2}
    trackStyle={{ backgroundColor: markerColor, bottom: 0, margin: 'auto', top: 0 }}
    value={isRange ? [value?.min ?? lower ?? 0, value?.max ?? upper ?? 0] : value?.min}
  />
);
