import { _Dropdown } from '@lib/frontend/core/components/Dropdown/_Dropdown';
import type { _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import { DROPDOWN_MAX_HEIGHT } from '@lib/frontend/core/components/Dropdown/Dropdown.constants';
import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';

export const Dropdown = composeComponent<DropdownPropsModel, _DropdownPropsModel>({
  getComponent: () => _Dropdown,

  getProps: ({ anchor, children, isFullWidth, isLeft, isOpen, isRight, isTop, onClose }) => ({
    anchor,
    children: (
      <Wrapper
        backgroundColor={THEME_COLOR.NEUTRAL}
        border
        isFullWidth
        isShadow
        mLeft={isRight}
        mRight={isLeft}
        mVertical
        round>
        <Wrapper
          grow
          isVerticalScrollable
          maxHeight={DROPDOWN_MAX_HEIGHT}
          p={THEME_SIZE.SMALL}>
          {children}
        </Wrapper>
      </Wrapper>
    ),
    isFullWidth,
    isLeft,
    isOpen,
    isRight,
    isTop,
    onClose,
  }),
});
