import type { ThemeConfigModel } from '@lib/config/theme/theme.models';
import type { PartialDeepModel } from '@lib/shared/core/core.models';

export const commonThemeConfig: PartialDeepModel<ThemeConfigModel> = {
  animation: {
    duration: 200,
    transition: 500,
  },

  colors: {
    error: {
      dark: '#aa2e25',
      light: '#fbc6c2',
      main: '#F44336',
    },
    primary: {
      dark: '#00003B',
      light: '#BACFFF',
      main: '#5469d4',
    },
    secondary: {
      dark: '#696969',
      light: '#C0C0C0',
      main: '#8c8c8c',
    },
    success: {
      dark: '#186429',
      light: '#7ECA8F',
      main: '#28A745',
    },
    warning: {
      dark: '#D18700',
      light: '#FFD68A',
      main: '#FFB52E',
    },
  },

  font: {
    boldWeight: '500',

    family: __IS_WEB__
      ? 'Lato, "Helvetica Neue", Arial, sans-serif'
      : __IS_NATIVE__
      ? 'Helvetica Neue'
      : 'sans-serif',

    lineHeight: 25,

    size: {
      l: 23,
      m: 15,
      s: 11,
      xl: 34,
      xs: 8,
    },

    stylish: __IS_WEB__ ? 'Merriweather, Georgia, Serif' : 'sans-serif',
  },

  shape: {
    borderRadius: 18,
    height: {
      l: 50,
      m: 40,
      s: 32,
    },
    spacing: {
      l: 28,
      m: 16,
      s: 8,
    },
  },
};
