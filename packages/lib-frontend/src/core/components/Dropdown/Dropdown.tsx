import { _Dropdown } from '@lib/frontend/core/components/Dropdown/_Dropdown';
import { DROPDOWN_MAX_HEIGHT } from '@lib/frontend/core/components/Dropdown/Dropdown.constants';
import type { DropdownPropsModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_RELATIVE_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';

export const Dropdown: SFCModel<DropdownPropsModel> = ({
  anchor,
  children,
  isFullWidth,
  isLeft,
  isOpen,
  isRight,
  isTop,
  onClose,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <_Dropdown
      anchor={anchor}
      isFullWidth={isFullWidth}
      isLeft={isLeft}
      isOpen={isOpen}
      isRight={isRight}
      isTop={isTop}
      onClose={onClose}
      style={styles}>
      <Wrapper
        backgroundColor={THEME_RELATIVE_COLOR.MAIN}
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
    </_Dropdown>
  );
};
