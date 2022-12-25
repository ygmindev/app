import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import type { PartialDeepModel } from '@lib/shared/core/core.models';

export const themeCommonConfig: PartialDeepModel<ThemeConfigParamsModel> = {
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

    // family: process.env.APP_WEB
    //   ? 'Lato, "Helvetica Neue", Arial, sans-serif'
    //   : process.env.APP_NATIVE
    //   ? 'Helvetica Neue'
    //   : undefined,
    family: 'Lato, "Helvetica Neue", Arial, sans-serif',

    lineHeight: 25,

    regularWeight: 'normal',

    size: {
      l: 23,
      m: 15,
      s: 11,
      xl: 34,
      xs: 8,
    },

    // stylish: process.env.APP_WEB ? 'Merriweather, Georgia, Serif' : undefined,
    stylish: 'Merriweather, Georgia, Serif',
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
