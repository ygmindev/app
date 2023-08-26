import 'rc-slider/assets/index.css';

import isArray from 'lodash/isArray';
import Slider from 'rc-slider';
import { cloneElement, type ReactElement } from 'react';

import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type _SliderPropsModel } from '#lib-frontend/core/components/Slider/_Slider.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type ChildrenPropsModel, type SFCModel } from '#lib-frontend/core/core.models';

export const _Slider: SFCModel<_SliderPropsModel> = ({
  backgroundColor,
  fontColor,
  isDisabled,
  isRange,
  lower,
  markerColor,
  markerSize,
  max,
  maxIcon,
  minIcon,
  onChange,
  onChangeMax,
  step,
  upper,
  value,
  valueIcon,
}) => (
  <Slider
    allowCross={false}
    disabled={isDisabled}
    handleRender={(original, { index }) =>
      cloneElement<ChildrenPropsModel>(original as unknown as ReactElement<ChildrenPropsModel>, {
        children: (
          <Wrapper
            isAbsoluteFill
            isCenter
            m="auto"
            zIndex>
            <Icon
              color={fontColor}
              icon={isRange ? (index ? maxIcon : minIcon) : valueIcon}
            />
          </Wrapper>
        ),
      })
    }
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
    onChange={(v) => {
      if (isArray(v)) {
        onChange && onChange(v[0]);
        onChangeMax && onChangeMax(v[1]);
      } else {
        onChange && onChange(v);
      }
    }}
    railStyle={{ backgroundColor, bottom: 0, margin: 'auto', top: 0 }}
    range={isRange}
    step={step}
    style={{ height: markerSize }}
    tabIndex={2}
    trackStyle={{ backgroundColor: markerColor, bottom: 0, margin: 'auto', top: 0 }}
    value={isRange ? [value ?? lower, max ?? upper] : value}
  />
);
