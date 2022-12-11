import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { GlobalStyle } from '@lib/frontend/style/containers/GlobalStyle/GlobalStyle';
import type { _StyleProviderPropsModel } from '@lib/frontend/style/providers/StyleProvider/_StyleProvider.models';
import type { ReactNode } from 'react';
import { DefaultTheme, Provider } from 'react-native-paper';
import { ThemeProvider as StyledComponentStyleProvider } from 'styled-components';

export const _StyleProvider = composeComponent<
  _StyleProviderPropsModel,
  { children: ReactNode; theme: typeof DefaultTheme }
>({
  Component: Provider,
  getProps: ({ children, theme }) => ({
    children: (
      <StyledComponentStyleProvider theme={theme}>
        <GlobalStyle />

        {children}
      </StyledComponentStyleProvider>
    ),
    theme: {
      ...DefaultTheme,
      animation: { scale: 0 },
      colors: {
        ...DefaultTheme.colors,
        accent: theme.colors.secondary.main,
        background: theme.colors.background.main,
        error: theme.colors.error.main,
        primary: theme.colors.primary.main,
        text: theme.colors.text.main,
      },
      dark: theme.isDark,
      myOwnProperty: true,
      roundness: theme.shape.borderRadius,
    },
  }),
});
