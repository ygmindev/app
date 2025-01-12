import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type ScrollButtonPropsModel } from '@lib/frontend/core/components/ScrollButton/ScrollButton.models';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const ScrollButton: LFCModel<ScrollButtonPropsModel> = ({
  contentSize,
  isHorizontal,
  onScrollTo,
  size,
  value,
}) => {
  const theme = useTheme();
  const isScrollUpVisible =
    (value ?? 0) < (contentSize ?? 0) - (size ?? 0) - theme.shape.spacing[THEME_SIZE.MEDIUM];
  const isScrollDownVisible = (value ?? 0) > theme.shape.spacing[THEME_SIZE.MEDIUM];
  const scrollOffset = 150;

  return (
    <>
      <Appearable
        bottom={isHorizontal ? 0 : undefined}
        isActive={isScrollDownVisible}
        isCenter
        left={isHorizontal ? 0 : undefined}
        pLeft
        position={SHAPE_POSITION.ABSOLUTE}
        right={isHorizontal ? undefined : 0}
        top={0}
        zIndex>
        <Button
          icon={isHorizontal ? 'chevronLeft' : 'chevronUp'}
          isShadow
          onPress={
            isScrollDownVisible
              ? () => onScrollTo?.({ [isHorizontal ? 'x' : 'y']: (value ?? 0) - scrollOffset })
              : undefined
          }
          size={THEME_SIZE.SMALL}
          type={BUTTON_TYPE.INVISIBLE}
        />
      </Appearable>

      <Appearable
        bottom={0}
        isActive={isScrollUpVisible}
        isCenter
        left={isHorizontal ? undefined : 0}
        pRight
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        top={isHorizontal ? 0 : undefined}
        zIndex>
        <Button
          icon={isHorizontal ? 'chevronRight' : 'chevronDown'}
          isShadow
          onPress={
            isScrollUpVisible
              ? () => onScrollTo?.({ [isHorizontal ? 'x' : 'y']: (value ?? 0) + scrollOffset })
              : undefined
          }
          size={THEME_SIZE.SMALL}
          type={BUTTON_TYPE.INVISIBLE}
        />
      </Appearable>
    </>
  );
};
