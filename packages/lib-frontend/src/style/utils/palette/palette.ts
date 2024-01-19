import { _palette } from '@lib/frontend/style/utils/palette/_palette';
import {
  type PaletteModel,
  type PaletteParamsModel,
} from '@lib/frontend/style/utils/palette/palette.models';

export const palette = (...params: PaletteParamsModel): PaletteModel => _palette(...params);
