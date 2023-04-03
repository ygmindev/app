import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { ProviderProps } from 'react-native-paper';
import { DefaultTheme, Provider } from 'react-native-paper';

export const _StyleProvider = composeComponent<_StyleProviderPropsModel, ProviderProps>({
  Component: Provider,

  getProps: ({ children, value }) => {
    if (value) {
      const { brightness, theme } = value || {};
      const fontStyle = {
        fontFamily: theme.font.fontFamily.main,
        fontSize: theme.font.size.m,
        fontWeight: theme.font.weight,
        letterSpacing: 0,
        lineHeight: theme.font.lineHeight,
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
                background: theme.colors.tone.neutral.main,
                error: theme.colors.tone.error.main,
                errorContainer: theme.colors.tone.error.muted,
                onBackground: theme.colors.tone.neutral.mainContrast,
                onError: theme.colors.tone.error.mainContrast,
                onErrorContainer: theme.colors.tone.error.mutedContrast,
                onPrimary: theme.colors.tone.primary.mainContrast,
                onPrimaryContainer: theme.colors.tone.primary.mutedContrast,
                onSecondary: theme.colors.tone.secondary.mainContrast,
                onSecondaryContainer: theme.colors.tone.secondary.mutedContrast,
                outline: theme.colors.tone.neutral.muted,
                primary: theme.colors.tone.primary.main,
                primaryContainer: theme.colors.tone.primary.muted,
                secondary: theme.colors.tone.secondary.main,
                secondaryContainer: theme.colors.tone.secondary.muted,
                shadow: theme.colors.tone.neutral.muted,
              },

              dark: brightness === STYLE_BRIGHTNESS.DARK,

              fonts: {
                bodyLarge: { ...fontStyle, fontSize: theme.font.size.l },
                bodyMedium: fontStyle,
                bodySmall: { ...fontStyle, fontSize: theme.font.size.s },
                labelLarge: { ...fontStyle, fontSize: theme.font.size.l },
                labelMedium: fontStyle,
                labelSmall: { ...fontStyle, fontSize: theme.font.size.s },
              },

              roundness: theme.shape.borderRadius,
            },

            DefaultTheme,
          ].filter(Boolean),
        }),
      };
    }
    return { children, theme: DefaultTheme };
  },
});
