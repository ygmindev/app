import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE, THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const Button: SFCModel<ButtonPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  type = BUTTON_TYPE.FILLED,
  icon,
  size = THEME_BASIC_SIZE.MEDIUM,
  ...props
}) => {
  const theme = useTheme();

  const _pressableAnimation = (isActive?: boolean): AnimationModel => {
    switch (type) {
      case BUTTON_TYPE.FILLED: {
        const _color = theme.colors[color].main;
        return {
          from: { backgroundColor: _color },
          to: isActive
            ? { backgroundColor: palette({ color: _color, lightness: 55 }) }
            : { backgroundColor: _color },
        };
      }
      case BUTTON_TYPE.TRANSPARENT: {
        const from = { backgroundColor: theme.colors.neutral.main };
        return {
          from,
          to: isActive ? { backgroundColor: theme.colors[color].muted } : from,
        };
      }
      default:
        return {};
    }
  };

  return (
    <Pressable
      {...props}
      animation={_pressableAnimation}
      height={theme.shape.height[size]}
      isCenter>
      {() => (
        <Text
          align={FONT_ALIGN.CENTER}
          color={
            theme.colors[color][
              type == BUTTON_TYPE.TRANSPARENT ? THEME_ROLE.MAIN : THEME_ROLE.MAIN_CONTRAST
            ]
          }
          isBold
          isCapitalize>
          {children}
        </Text>
      )}
    </Pressable>
  );
};
