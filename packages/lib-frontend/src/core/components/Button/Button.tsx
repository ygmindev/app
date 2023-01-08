import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
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
    const _color = theme.colors.tone[color];
    switch (type) {
      case BUTTON_TYPE.FILLED:
        return {
          from: { backgroundColor: _color.main },
          isActive,
          to: {
            backgroundColor: palette({
              color: _color.main,
              lightness: theme.colors.activeLightness,
            }),
          },
        };
      case BUTTON_TYPE.ICON:
      case BUTTON_TYPE.TRANSPARENT:
        return {
          from: { backgroundColor: theme.colors.tone.neutral.main },
          isActive,
          to: { backgroundColor: _color.muted },
        };
      default:
        return {};
    }
  };

  const _textColor =
    theme.colors.tone[color][
      type == BUTTON_TYPE.TRANSPARENT || type == BUTTON_TYPE.ICON
        ? THEME_ROLE.MAIN
        : THEME_ROLE.MAIN_CONTRAST
    ];

  const _height = theme.shape.height[size];

  return (
    <Pressable
      {...props}
      animation={_pressableAnimation}
      height={_height}
      isCenter
      width={type === BUTTON_TYPE.ICON ? _height : undefined}>
      {() => {
        let _children = children && (
          <TranslatableText
            align={FONT_ALIGN.CENTER}
            color={_textColor}
            isBold
            isCapitalize>
            {children}
          </TranslatableText>
        );
        if (icon) {
          _children = (
            <Wrapper isRowAlign>
              <Icon
                color={_textColor}
                icon={icon}
              />

              {_children}
            </Wrapper>
          );
        }
        return _children;
      }}
    </Pressable>
  );
};
