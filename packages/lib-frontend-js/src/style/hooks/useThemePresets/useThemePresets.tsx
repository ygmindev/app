import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { type UseThemePresetsModel } from '@lib/frontend/style/hooks/useThemePresets/useThemePresets.models';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';

export const useThemePresets = (): UseThemePresetsModel => {
  const theme = useTheme();
  return {
    shapePrimaryMainStyle: {
      backgroundColor: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
    },

    textMainStyle: {
      color: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.CONTRAST],
      fontFamily: theme.font.fontFamily.main,
      fontSize: theme.font.size[THEME_SIZE.MEDIUM],
      fontWeight: theme.font.weight.main,
    },
  };
};
