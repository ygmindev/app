import { type ThemeConfigModel } from '@lib/config/theme/theme.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';

export const THEME_COLOR_TONES: Record<THEME_COLOR, string> = {
  [THEME_COLOR.ERROR]: '#f44336',
  // [THEME_COLOR.PRIMARY]: '#151c6d',
  [THEME_COLOR.PRIMARY]: '#00355f',
  [THEME_COLOR.NEUTRAL]: '#414141ff',
  // [THEME_COLOR.SECONDARY]: '#00DCDC',
  [THEME_COLOR.SECONDARY]: '#B9FFFF',
  [THEME_COLOR.SUCCESS]: '#28a745',
  [THEME_COLOR.WARNING]: '#ffb52e',
};

export const THEME_ANIMATION: ThemeConfigModel['animation'] = {
  effect: 100,

  transition: 300,
};
