import {
  type _PaletteModel,
  type _PaletteParamsModel,
} from '@lib/frontend/style/utils/palette/_palette.models';
import Color from 'color';

export const _palette = (...[color, options]: _PaletteParamsModel): _PaletteModel => {
  let colorF = Color(color);
  if (options.alpha) {
    colorF = colorF.alpha(options.alpha);
  }
  if (!!options.lightness && options.lightness !== 0.5) {
    colorF = colorF.lightness(options.lightness * 100);
  }
  return colorF.hexa();
};
