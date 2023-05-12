import type { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import type {
  BrightnessModel,
  ThemeColorModel,
  ThemeModel,
  ThemeRoleModel,
  ThemeSizeModel,
  ThemeSizeMoreModel,
} from '@lib/frontend/style/style.models';
import type { PaletteParamsModel } from '@lib/frontend/style/utils/palette/palette.models';
import type { FontFamilyModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import type { TextStyle } from 'react-native';

export interface _ThemeConfigParamsModel {
  animation: {
    duration: number;
    transition: number;
  };

  colors: {
    activeLightness: number;

    disabledOpacity: number;

    palette: {
      [STYLE_BRIGHTNESS.DARK]: Record<
        'theme' | 'neutral',
        Record<ThemeRoleModel, Omit<PaletteParamsModel, 'color'>>
      >;
      [STYLE_BRIGHTNESS.LIGHT]: Record<
        'theme' | 'neutral',
        Record<ThemeRoleModel, Omit<PaletteParamsModel, 'color'>>
      >;
    };

    tone: Record<ThemeColorModel, string>;
  };

  font: {
    fontFamily: Record<FontFamilyModel, string>;
    lineHeight: number;
    size: Record<ThemeSizeMoreModel, number>;
    weight: TextStyle['fontWeight'];
    weightBold: TextStyle['fontWeight'];
  };

  layout: {
    header: {
      height: number;
    };
    width: Record<ThemeSizeModel, number>;
  };

  shape: {
    borderRadius: number;
    height: Record<ThemeSizeMoreModel, number>;
    spacing: Record<ThemeSizeModel, number>;
  };
}

export type _ThemeConfigModel = (brightness: BrightnessModel) => ThemeModel;