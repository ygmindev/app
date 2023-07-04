import { DefaultTheme } from 'react-native-paper';

import {
  type _ThemeConfigModel,
  type ThemeConfigModel,
} from '#lib-config/style/theme/theme.models';
import {
  STYLE_BRIGHTNESS,
  THEME_COLOR,
  THEME_ROLE,
  THEME_SHADE,
  THEME_SIZE,
} from '#lib-frontend/style/style.constants';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const _theme = ({ brightness, color, font, shape }: ThemeConfigModel): _ThemeConfigModel => {
  const fontStyle = {
    fontFamily: font.fontFamily.main,
    fontSize: font.size[THEME_SIZE.MEDIUM],
    fontWeight: font.weight.main,
    letterSpacing: 0,
    lineHeight: font.lineHeight,
  };
  return merge([
    {
      animation: {
        scale: 0,
      },

      colors: {
        background: color.palette.surface[THEME_SHADE.MAIN][THEME_ROLE.BASE],
        error: color.palette[THEME_COLOR.ERROR][THEME_SHADE.MAIN][THEME_ROLE.BASE],
        errorContainer: color.palette[THEME_COLOR.ERROR][THEME_SHADE.MUTED][THEME_ROLE.BASE],
        onBackground: color.palette.surface[THEME_SHADE.MAIN][THEME_ROLE.CONTRAST],
        onError: color.palette[THEME_COLOR.ERROR][THEME_SHADE.MAIN][THEME_ROLE.CONTRAST],
        onErrorContainer: color.palette[THEME_COLOR.ERROR][THEME_SHADE.MUTED][THEME_ROLE.CONTRAST],
        onPrimary: color.palette[THEME_COLOR.PRIMARY][THEME_SHADE.MAIN][THEME_ROLE.CONTRAST],
        onPrimaryContainer:
          color.palette[THEME_COLOR.PRIMARY][THEME_SHADE.MUTED][THEME_ROLE.CONTRAST],
        onSecondary: color.palette[THEME_COLOR.SECONDARY][THEME_SHADE.MAIN][THEME_ROLE.CONTRAST],
        onSecondaryContainer:
          color.palette[THEME_COLOR.SECONDARY][THEME_SHADE.MUTED][THEME_ROLE.CONTRAST],
        outline: color.border,
        primary: color.palette[THEME_COLOR.PRIMARY][THEME_SHADE.MAIN][THEME_ROLE.BASE],
        primaryContainer: color.palette[THEME_COLOR.PRIMARY][THEME_SHADE.MUTED][THEME_ROLE.BASE],
        secondary: color.palette[THEME_COLOR.SECONDARY][THEME_SHADE.MAIN][THEME_ROLE.BASE],
        secondaryContainer:
          color.palette[THEME_COLOR.SECONDARY][THEME_SHADE.MUTED][THEME_ROLE.BASE],
        shadow: color.border,
      },

      dark: brightness === STYLE_BRIGHTNESS.DARK,

      fonts: {
        bodyLarge: { ...fontStyle, fontSize: font.size[THEME_SIZE.LARGE] },
        bodyMedium: fontStyle,
        bodySmall: { ...fontStyle, fontSize: font.size[THEME_SIZE.SMALL] },
        labelLarge: { ...fontStyle, fontSize: font.size[THEME_SIZE.LARGE] },
        labelMedium: fontStyle,
        labelSmall: { ...fontStyle, fontSize: font.size[THEME_SIZE.SMALL] },
      },

      roundness: shape.borderRadius,
    },

    DefaultTheme,
  ]);
};
