import type { _ThemeConfigParamsModel } from '@lib/config/style/theme/_theme.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { MD3Theme } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

export const _themeConfig = ({ colors, font, isDark, shape }: _ThemeConfigParamsModel): MD3Theme =>
  merge<MD3Theme>({
    values: [
      {
        animation: {
          scale: 0,
        },

        colors: {
          background: colors.background.main,
          error: colors.error.main,
          errorContainer: '',
          onBackground: colors.background.text,
          onError: colors.error.text,
          onErrorContainer: '',
          onPrimary: colors.primary.text,
          onPrimaryContainer: '',
          onSecondary: colors.secondary.text,
          onSecondaryContainer: '',
          onSurface: colors.surface.main,
          onSurfaceDisabled: '',
          onTertiary: colors.secondary.text,
          onTertiaryContainer: '',
          outline: colors.border,
          primary: colors.primary.main,
          primaryContainer: '',
          secondary: colors.secondary.main,
          secondaryContainer: '',
          shadow: colors.shadow,
          surface: colors.surface.main,
          surfaceDisabled: '',
          tertiary: colors.secondary.main,
          tertiaryContainer: '',
        },

        dark: isDark,

        fonts: {
          bodyLarge: {
            fontFamily: font.fontFamily.main,
            fontSize: font.size.l,
            fontWeight: font.weight,
            lineHeight: font.lineHeight,
          },
          bodyMedium: {
            fontFamily: font.fontFamily.main,
            fontSize: font.size.m,
            fontWeight: font.weight,
            lineHeight: font.lineHeight,
          },
          bodySmall: {
            fontFamily: font.fontFamily.main,
            fontSize: font.size.s,
            fontWeight: font.weight,
            lineHeight: font.lineHeight,
          },
          labelLarge: {
            fontFamily: font.fontFamily.main,
            fontSize: font.size.l,
            fontWeight: font.weight,
            lineHeight: font.lineHeight,
          },
          labelMedium: {
            fontFamily: font.fontFamily.main,
            fontSize: font.size.m,
            fontWeight: font.weight,
            lineHeight: font.lineHeight,
          },
          labelSmall: {
            fontFamily: font.fontFamily.main,
            fontSize: font.size.s,
            fontWeight: font.weight,
            lineHeight: font.lineHeight,
          },
        },

        roundness: shape.borderRadius,
      },

      DefaultTheme,
    ],
  });
