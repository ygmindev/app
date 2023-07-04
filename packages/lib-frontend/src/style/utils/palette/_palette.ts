import Color from 'color';

import {
  type _PaletteModel,
  type _PaletteParamsModel,
} from '#lib-frontend/style/utils/palette/_palette.models';

export const _palette = (...[color, options]: _PaletteParamsModel): _PaletteModel => {
  let colorF = Color(color);
  if (options.alpha && options.alpha < 1.0) {
    colorF = colorF.alpha(options.alpha);
  }
  if (options.lightness && options.lightness !== 0.5) {
    colorF = colorF.lightness(options.lightness);
  }
  return colorF.hexa();
};
