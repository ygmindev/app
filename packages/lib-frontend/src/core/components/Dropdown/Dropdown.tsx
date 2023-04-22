import { _Dropdown } from '@lib/frontend/core/components/Dropdown/_Dropdown';
import type { _DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/_Dropdown.models';
import { DROPDOWN_MAX_HEIGHT } from '@lib/frontend/core/components/Dropdown/Dropdown.constants';
import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_COLOR, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Dropdown = composeComponent<DropdownPropsModel, _DropdownPropsModel>({
  Component: _Dropdown,

  getProps: ({
    anchor,
    children,
    direction,
    isFullWidth,
    isOpen,
    maxHeight = DROPDOWN_MAX_HEIGHT,
    onClose,
    width,
  }) => ({
    anchor,
    children: (
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
          p={THEME_SIZE_MORE.SMALL}>
          {children}
        </Wrapper>
      </Wrapper>
    ),
    direction,
    isFullWidth,
    isOpen,
    onClose: async () => {
      await sleep({ duration: 100 });
      onClose && onClose();
    },
  }),
});

process.env.APP_DEBUG && (Dropdown.displayName = variableName(() => Dropdown));
