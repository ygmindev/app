import { _Dropdown } from '@lib/frontend/core/components/Dropdown/_Dropdown';
import {
  type DropdownPropsModel,
  type DropdownRefModel,
} from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { useImperativeHandle, useRef } from 'react';

export const Dropdown: RLFCModel<DropdownRefModel, DropdownPropsModel> = ({
  anchor,
  children,
  direction,
  isFullWidth,
  isHidden,
  isOpen,
  maxHeight,
  maxWidth,
  onToggle,
  ref,
  width,
  ...props
}) => {
  const theme = useTheme();
  const wrapperRef = useRef<WrapperRefModel>(null);
  const { styles } = useLayoutStyles({ props });
  useImperativeHandle(ref, () => ({
    isOpen: () => isOpen ?? false,
    scrollTo: (params) => wrapperRef?.current?.scrollTo(params),
    toggle: onToggle,
  }));
  return (
    <_Dropdown
      anchor={anchor}
      delay={theme.animation.effect}
      direction={direction}
      isFullWidth={isFullWidth}
      isOpen={isOpen}
      maxHeight={maxHeight ?? theme.shape.size[THEME_SIZE.MEDIUM]}
      maxWidth={maxWidth ?? theme.shape.size[THEME_SIZE.MEDIUM]}
      onToggle={onToggle}
      style={styles}>
      <Wrapper
        isFullWidth={width ? undefined : true}
        isHidden={isHidden}
        p={THEME_SIZE.SMALL}>
        <Wrapper
          backgroundColor={THEME_COLOR_MORE.SURFACE}
          border
          flex
          isOverflowHidden
          isShadow
          maxWidth={maxWidth}
          round
          width={width}>
          <Wrapper
            flex
            isFullWidth
            isVerticalScrollable
            maxHeight={maxHeight ?? theme.layout.dropdown.maxHeight}
            p={THEME_SIZE.SMALL}
            ref={wrapperRef}>
            {children}
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </_Dropdown>
  );
};
