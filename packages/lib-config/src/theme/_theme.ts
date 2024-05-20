import {
  type _ThemeConfigModel,
  type ThemeConfigModel,
} from '@lib/config/theme/theme.models';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { DefaultTheme } from 'react-native-paper';

export const _theme = ({ color, font, shape }: ThemeConfigModel): _ThemeConfigModel => {
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
        background: color.palette.surface[THEME_ROLE.MAIN],
        error: color.palette[THEME_COLOR.ERROR][THEME_ROLE.MAIN],
        errorContainer: color.palette[THEME_COLOR.ERROR][THEME_ROLE.MUTED],
        onBackground: color.palette.surface[THEME_ROLE.CONTRAST],
        onError: color.palette[THEME_COLOR.ERROR][THEME_ROLE.CONTRAST],
        onErrorContainer: color.palette[THEME_COLOR.ERROR][THEME_ROLE.CONTRAST],
        onPrimary: color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.CONTRAST],
        onPrimaryContainer: color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.CONTRAST],
        onSecondary: color.palette[THEME_COLOR.SECONDARY][THEME_ROLE.CONTRAST],
        onSecondaryContainer: color.palette[THEME_COLOR.SECONDARY][THEME_ROLE.CONTRAST],
        onSurface: color.palette.surface[THEME_ROLE.CONTRAST],
        onSurfaceVariant: color.border,
        outline: color.border,
        primary: color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
        primaryContainer: color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MUTED],
        secondary: color.palette[THEME_COLOR.SECONDARY][THEME_ROLE.MAIN],
        secondaryContainer: color.palette[THEME_COLOR.SECONDARY][THEME_ROLE.MUTED],
        shadow: color.border,
      },

      dark: color.isDark,

      fonts: {
        bodyLarge: { ...fontStyle, fontSize: font.size[THEME_SIZE.LARGE] },
        bodyMedium: fontStyle,
        bodySmall: { ...fontStyle, fontSize: font.size[THEME_SIZE.SMALL] },
        labelLarge: { ...fontStyle, fontSize: font.size[THEME_SIZE.LARGE] },
        labelMedium: fontStyle,
        labelSmall: { ...fontStyle, fontSize: font.size[THEME_SIZE.SMALL] },
      },

      roundness: shape.borderRadius[THEME_SIZE.MEDIUM],
    },

    DefaultTheme,
  ]);
};
