import type { _ThemeConfigParamsModel } from '@lib/config/style/theme/_theme.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { MD3Theme } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

export const _themeConfig = ({ colors, font, shape }: _ThemeConfigParamsModel): MD3Theme => {
  return merge<MD3Theme>({
    values: [{}, DefaultTheme],
  });
};
