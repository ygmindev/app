import type { ThemeConfigParamsModel } from '@lib/config/style/theme/theme.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { FONT_FAMILY } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

const APP_PLATFORM = getEnv<PlatformModel>('APP_PLATFORM');

export const themeConfig: ThemeConfigParamsModel = {
  animation: {
    duration: 200,
    transition: 500,
  },

  colors: {
    [THEME_COLOR.ERROR]: '#F44336',
    [THEME_COLOR.PRIMARY]: '#5469D4',
    [THEME_COLOR.SECONDARY]: '#8C8C8C',
    [THEME_COLOR.SUCCESS]: '#28A745',
    [THEME_COLOR.WARNING]: '#FFB52E',
    [THEME_COLOR.NEUTRAL]: '#8C8C8C',
  },

  font: {
    fontFamily: {
      [FONT_FAMILY.MAIN]:
        APP_PLATFORM === PLATFORM.IOS
          ? 'Helvetica Neue'
          : 'Lato, "Helvetica Neue", Arial, sans-serif',
      [FONT_FAMILY.STYLISH]: 'Merriweather, Georgia, Serif',
    },

    lineHeight: 25,

    size: {
      l: 23,
      m: 15,
      s: 11,
      xl: 34,
      xs: 8,
    },

    weight: 'normal',

    weightBold: '500',
  },

  palette: {
    dark: {
      [THEME_COLOR.ERROR]: {
        main: { alpha: 0.8 },
        mainContrast: { alpha: 0.2 },
        muted: { alpha: 0.3 },
        mutedContrast: { alpha: 0.9 },
      },
      [THEME_COLOR.PRIMARY]: {
        main: { alpha: 0.8 },
        mainContrast: { alpha: 0.2 },
        muted: { alpha: 0.3 },
        mutedContrast: { alpha: 0.9 },
      },
      [THEME_COLOR.SECONDARY]: {
        main: { alpha: 0.8 },
        mainContrast: { alpha: 0.2 },
        muted: { alpha: 0.3 },
        mutedContrast: { alpha: 0.9 },
      },
      [THEME_COLOR.SUCCESS]: {
        main: { alpha: 0.8 },
        mainContrast: { alpha: 0.2 },
        muted: { alpha: 0.3 },
        mutedContrast: { alpha: 0.9 },
      },
      [THEME_COLOR.NEUTRAL]: {
        main: { alpha: 0.1 },
        mainContrast: { alpha: 0.9 },
        muted: { alpha: 0.1 },
        mutedContrast: { alpha: 0.9 },
      },
      [THEME_COLOR.WARNING]: {
        main: { alpha: 0.8 },
        mainContrast: { alpha: 0.2 },
        muted: { alpha: 0.3 },
        mutedContrast: { alpha: 0.9 },
      },
    },
    light: {
      [THEME_COLOR.ERROR]: {
        main: { alpha: 0.4 },
        mainContrast: { alpha: 1.0 },
        muted: { alpha: 0.9 },
        mutedContrast: { alpha: 0.1 },
      },
      [THEME_COLOR.PRIMARY]: {
        main: { alpha: 0.4 },
        mainContrast: { alpha: 1.0 },
        muted: { alpha: 0.9 },
        mutedContrast: { alpha: 0.1 },
      },
      [THEME_COLOR.SECONDARY]: {
        main: { alpha: 0.4 },
        mainContrast: { alpha: 1.0 },
        muted: { alpha: 0.9 },
        mutedContrast: { alpha: 0.1 },
      },
      [THEME_COLOR.SUCCESS]: {
        main: { alpha: 0.4 },
        mainContrast: { alpha: 1.0 },
        muted: { alpha: 0.9 },
        mutedContrast: { alpha: 0.1 },
      },
      [THEME_COLOR.NEUTRAL]: {
        main: { alpha: 0.99 },
        mainContrast: { alpha: 0.1 },
        muted: { alpha: 0.99 },
        mutedContrast: { alpha: 0.1 },
      },
      [THEME_COLOR.WARNING]: {
        main: { alpha: 0.4 },
        mainContrast: { alpha: 1.0 },
        muted: { alpha: 0.9 },
        mutedContrast: { alpha: 0.1 },
      },
    },
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
