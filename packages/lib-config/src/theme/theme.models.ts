import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type {
  ThemeBasicSizeModel,
  ThemeColorModel,
  ThemeRelativeColorModel,
  ThemeShadeModel,
  ThemeSizeModel,
} from '@lib/frontend/styling/utils/theme/theme.models';

export interface ThemeConfigModel {
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
    family: string;
    lineHeight: number;
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
