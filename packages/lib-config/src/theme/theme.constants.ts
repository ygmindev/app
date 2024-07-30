import { type ThemeConfigModel } from '@lib/config/theme/theme.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type ThemeColorModel } from '@lib/frontend/style/style.models';

export const THEME_COLOR_TONES: Record<ThemeColorModel, string> = {
  [THEME_COLOR.ERROR]: '#f44336',
  [THEME_COLOR.PRIMARY]: '#151c6d',
  [THEME_COLOR.SECONDARY]: '#00DCDC',
  [THEME_COLOR.SUCCESS]: '#28a745',
  [THEME_COLOR.WARNING]: '#ffb52e',
};

export const THEME_ANIMATION: ThemeConfigModel['animation'] = {
  effect: 200,

  transition: 350,
};
