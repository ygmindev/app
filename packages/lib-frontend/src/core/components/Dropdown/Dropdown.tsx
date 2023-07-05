import { forwardRef, useImperativeHandle, useRef } from 'react';

import { _Dropdown } from '#lib-frontend/core/components/Dropdown/_Dropdown';
import {
  type DropdownPropsModel,
  type DropdownRefModel,
} from '#lib-frontend/core/components/Dropdown/Dropdown.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { type RSFCModel } from '#lib-frontend/core/core.models';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_SIZE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';

export const Dropdown: RSFCModel<DropdownRefModel, DropdownPropsModel> = forwardRef(
  (
    { anchor, children, direction, isFullWidth, isOpen, maxHeight, maxWidth, onToggle, width },
    ref,
  ) => {
    const theme = useTheme();
    const wrapperRef = useRef<WrapperRefModel>(null);
    useImperativeHandle(ref, () => ({
      isOpen: () => isOpen || false,
      scrollTo: (params) => wrapperRef?.current?.scrollTo(params),
      toggle: onToggle,
    }));
    return (
      <_Dropdown
        anchor={anchor}
        direction={direction}
        isFullWidth={isFullWidth}
        isOpen={isOpen}
        onToggle={onToggle}>
        <Wrapper
          backgroundColor={THEME_COLOR_MORE.SURFACE}
          border
          isFullWidth={width ? undefined : true}
          isShadow
          round
          width={width}>
          <Wrapper
            grow
            isVerticalScrollable
            maxHeight={maxHeight || theme.layout.height[THEME_SIZE.MEDIUM]}
            maxWidth={maxWidth || theme.layout.width[THEME_SIZE.SMALL]}
            p={THEME_SIZE_MORE.SMALL}
            ref={wrapperRef}>
            {children}
          </Wrapper>
        </Wrapper>
      </_Dropdown>
    );
  },
);
