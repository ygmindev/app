import type { _PaletteParamsModel } from '@lib/frontend/style/utils/palette/_palette.models';
import Color from 'color';

export const _palette = ({ alpha = 0.5, color }: _PaletteParamsModel): string => {
  let _color = Color(color);
  if (alpha !== 0.5) {
    _color = _color.alpha(alpha);
  }
  return _color.hex();
};
