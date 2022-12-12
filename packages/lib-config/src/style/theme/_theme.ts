import type { _ThemeConfigParamsModel } from '@lib/config/style/theme/_theme.models';
import type { Theme } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

export const _themeConfig = ({ colors, font, isDark, shape }: _ThemeConfigParamsModel): Theme => ({
  ...DefaultTheme,

  animation: { scale: 0 },

  colors: {
    ...DefaultTheme.colors,
    accent: colors.secondary.main,
    background: colors.background.main,
    error: colors.error.main,
    primary: colors.primary.main,
    text: colors.text.main,
  },

  dark: isDark,

  fonts: {
    light: {
      fontFamily: font.family,
      fontWeight: font.regularWeight,
    },
    medium: {
      fontFamily: font.family,
      fontWeight: font.regularWeight,
    },
    regular: {
      fontFamily: font.family,
      fontWeight: font.regularWeight,
    },
    thin: {
      fontFamily: font.family,
      fontWeight: font.regularWeight,
    },
  },

  roundness: shape.borderRadius,
});
