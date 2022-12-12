import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type {
  ThemeBasicSizeModel,
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
  ThemeSizeModel,
} from '@lib/frontend/style/utils/theme/theme.models';
import type { TextStyle } from 'react-native';

export interface _ThemeConfigParamsModel {
  animation: {
    duration: number;
    transition: number;
  };

  colors: Record<ThemeColorModel, Record<ThemeShadeModel, string>> & {
    background: Record<ThemeRelativeColorModel, string>;
    border: string;
    text: Record<ThemeRelativeColorModel, string>;
  };

  font: {
    boldWeight: TextStyle['fontWeight'];
    family: string;
    lineHeight: number;
    regularWeight: TextStyle['fontWeight'];
    size: Record<ThemeSizeModel, number>;
    stylish: string;
  };

  id: string;

  isDark: boolean;

  name: TranslationTextModel;

  shape: {
    borderRadius: number;
    height: Record<ThemeBasicSizeModel, number>;
    spacing: Record<ThemeBasicSizeModel, number>;
  };
}
