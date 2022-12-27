import type { _PaletteParamsModel } from '@lib/frontend/style/utils/palette/_palette.models';
import Color from 'color';

export const _palette = ({ alpha = 1.0, color, lightness = 0.5 }: _PaletteParamsModel): string => {
  let _color = Color(color);
  if (alpha < 1.0) {
    _color = _color.alpha(alpha);
  }
  if (lightness !== 0.5) {
    _color = _color.lightness(lightness);
  }
  return _color.hexa();
};
