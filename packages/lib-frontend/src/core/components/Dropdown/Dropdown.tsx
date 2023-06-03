import { _Dropdown } from '@lib/frontend/core/components/Dropdown/_Dropdown';
import { DROPDOWN_MAX_HEIGHT } from '@lib/frontend/core/components/Dropdown/Dropdown.constants';
import type {
  DropdownPropsModel,
  DropdownRefModel,
} from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import type { RSFCModel } from '@lib/frontend/core/core.models';
import { THEME_COLOR, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const Dropdown: RSFCModel<DropdownRefModel, DropdownPropsModel> = forwardRef(
  (
    {
      anchor,
      children,
      direction,
      isFullWidth,
      isOpen,
      maxHeight = DROPDOWN_MAX_HEIGHT,
      onToggle,
      width,
    },
    ref,
  ) => {
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
        onToggle={async (value) => {
          await sleep({ duration: 100 });
          onToggle(value);
        }}>
        <Wrapper
          backgroundColor={THEME_COLOR.NEUTRAL}
          border
          isFullWidth={width ? undefined : true}
          isShadow
          round
          width={width}>
          <Wrapper
            grow
            isVerticalScrollable
            maxHeight={maxHeight}
            p={THEME_SIZE_MORE.SMALL}
            ref={wrapperRef}>
            {children}
          </Wrapper>
        </Wrapper>
      </_Dropdown>
    );
  },
);
