import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { ProviderProps } from 'react-native-paper';
import { DefaultTheme, Provider } from 'react-native-paper';
import type { MD3Type } from 'react-native-paper/lib/typescript/types';

export const _StyleProvider = composeComponent<_StyleProviderPropsModel, ProviderProps>({
  Component: Provider,

  getProps: ({ children, value }) => {
    if (value) {
      const fontStyle: MD3Type = {
        fontFamily: value.font.fontFamily.main,
        fontSize: value.font.size.m,
        fontWeight: value.font.weight,
        letterSpacing: 0,
        lineHeight: value.font.lineHeight,
      };

      return {
        children,
        theme: merge<typeof DefaultTheme>({
          values: [
            value && {
              animation: {
                scale: 0,
              },

              colors: {
                background: value.colors.tone.neutral.main,
                error: value.colors.tone.error.main,
                errorContainer: value.colors.tone.error.muted,
                onBackground: value.colors.tone.neutral.mainContrast,
                onError: value.colors.tone.error.mainContrast,
                onErrorContainer: value.colors.tone.error.mutedContrast,
                onPrimary: value.colors.tone.primary.mainContrast,
                onPrimaryContainer: value.colors.tone.primary.mutedContrast,
                onSecondary: value.colors.tone.secondary.mainContrast,
                onSecondaryContainer: value.colors.tone.secondary.mutedContrast,
                outline: value.colors.tone.neutral.muted,
                primary: value.colors.tone.primary.main,
                primaryContainer: value.colors.tone.primary.muted,
                secondary: value.colors.tone.secondary.main,
                secondaryContainer: value.colors.tone.secondary.muted,
                shadow: value.colors.tone.neutral.muted,
              },

              dark: value.isDark,

              fonts: {
                bodyLarge: { ...fontStyle, fontSize: value.font.size.l },
                bodyMedium: fontStyle,
                bodySmall: { ...fontStyle, fontSize: value.font.size.s },
                labelLarge: { ...fontStyle, fontSize: value.font.size.l },
                labelMedium: fontStyle,
                labelSmall: { ...fontStyle, fontSize: value.font.size.s },
              },

              roundness: value.shape.borderRadius,
            },

            DefaultTheme,
          ].filter(Boolean),
        }),
      };
    }
    return { children, theme: DefaultTheme };
  },
});
