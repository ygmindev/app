import Color from 'color';

import type {
  _PaletteModel,
  _PaletteParamsModel,
} from '#lib-frontend/style/utils/palette/_palette.models';

export const _palette = ({
  alpha = 1.0,
  color,
  lightness = 0.5,
}: _PaletteParamsModel): _PaletteModel => {
  let colorF = Color(color);
  if (alpha < 1.0) {
    colorF = colorF.alpha(alpha);
  }
  if (lightness !== 0.5) {
    colorF = colorF.lightness(lightness);
  }
  return colorF.hexa();
};
