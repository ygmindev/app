import type { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import type {
  ThemeBasicSizeModel,
  ThemeColorModel,
  ThemeRoleModel,
  ThemeSizeModel,
} from '@lib/frontend/style/style.models';
import type { PaletteParamsModel } from '@lib/frontend/style/utils/palette/palette.models';
import type { FontFamilyModel } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.models';
import type { TextStyle } from 'react-native';

export interface ThemeConfigParamsModel {
  animation: {
    duration: number;
    transition: number;
  };

  colors: {
    activeLightness: number;

    disabledOpacity: number;

    palette: {
      [STYLE_BRIGHTNESS.DARK]: Record<
        ThemeColorModel,
        Record<ThemeRoleModel, Omit<PaletteParamsModel, 'color'>>
      >;
      [STYLE_BRIGHTNESS.LIGHT]: Record<
        ThemeColorModel,
        Record<ThemeRoleModel, Omit<PaletteParamsModel, 'color'>>
      >;
    };

    tone: Record<ThemeColorModel, string>;
  };

  font: {
    fontFamily: Record<FontFamilyModel, string>;
    lineHeight: number;
    size: Record<ThemeSizeModel, number>;
    weight: TextStyle['fontWeight'];
    weightBold: TextStyle['fontWeight'];
  };

  layout: {
    header: {
      height: number;
    };
    width: Record<ThemeBasicSizeModel, number>;
  };

  shape: {
    borderRadius: number;
    height: Record<ThemeBasicSizeModel, number>;
    spacing: Record<ThemeBasicSizeModel, number>;
  };
}
