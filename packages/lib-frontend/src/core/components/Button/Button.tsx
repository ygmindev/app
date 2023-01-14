import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE, THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { palette } from '@lib/frontend/style/utils/palette/palette';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Button: SFCModel<ButtonPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  type = BUTTON_TYPE.FILLED,
  icon,
  size = THEME_BASIC_SIZE.MEDIUM,
  ...props
}) => {
  const theme = useTheme();

  const _pressableAnimation = ({
    isActive,
    isDisabled,
    isLoading,
  }: {
    isActive?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
  }): AnimationModel => {
    const _color = theme.colors.tone[color];
    switch (type) {
      case BUTTON_TYPE.FILLED:
        return {
          from: { backgroundColor: _color.main },
          isActive: isActive || isDisabled || isLoading,
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
          isActive: isActive || isDisabled || isLoading,
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
      position={SHAPE_POSITION.RELATIVE}
      width={type === BUTTON_TYPE.ICON ? _height : undefined}>
      {({ isLoading }) => {
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
        return (
          <>
            <Appearable
              isActive={!isLoading}
              isCenter
              isLazy={false}>
              {_children}
            </Appearable>

            <Appearable
              isAbsoluteFill
              isActive={isLoading}
              isCenter>
              <Loading color={_textColor} />
            </Appearable>
          </>
        );
      }}
    </Pressable>
  );
};
