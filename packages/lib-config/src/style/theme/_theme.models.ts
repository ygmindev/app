import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type {
  ThemeColorModel,
  ThemeFontStyleModel,
  ThemeSizeModel,
} from '@lib/frontend/style/style.models';
import type { TextStyle } from 'react-native';

export interface _ThemeConfigParamsModel {
  animation: {
    duration: number;
    transition: number;
  };

  colors: Record<ThemeColorModel, { main: string; text: string }> & {
    border: string;
    shadow: string;
  };

  font: {
    fontFamily: Record<ThemeFontStyleModel, string>;
    lineHeight: number;
    size: Record<ThemeSizeModel, number>;
    weight: TextStyle['fontWeight'];
    weightBold: TextStyle['fontWeight'];
  };

  id: string;

  isDark: boolean;

  name: TranslationTextModel;

  shape: {
    borderRadius: number;
    height: Record<ThemeSizeModel, number>;
    spacing: Record<ThemeSizeModel, number>;
  };
}
