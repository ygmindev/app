import { _Dropdown } from '@lib/frontend/core/components/Dropdown/_Dropdown';
import type { _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import { DROPDOWN_MAX_HEIGHT } from '@lib/frontend/core/components/Dropdown/Dropdown.constants';
import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION } from '@lib/frontend/core/core.constants';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Dropdown = composeComponent<DropdownPropsModel, _DropdownPropsModel>({
  Component: _Dropdown,

  getProps: ({ anchor, children, direction, isFullWidth, isOpen, onClose }) => ({
    anchor,
    children: (
      <Wrapper
        backgroundColor={THEME_COLOR.NEUTRAL}
        border
        isFullWidth
        isShadow
        mLeft={direction === DIRECTION.RIGHT}
        mRight={direction === DIRECTION.LEFT}
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
    direction,
    isFullWidth,
    isOpen,
    onClose,
  }),
});

process.env.APP_DEBUG && (Dropdown.displayName = variableName(() => Dropdown));
