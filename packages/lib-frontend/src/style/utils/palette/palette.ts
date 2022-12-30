import { _palette } from '@lib/frontend/style/utils/palette/_palette';
import type {
  PaletteModel,
  PaletteParamsModel,
} from '@lib/frontend/style/utils/palette/palette.models';

export const palette = (params: PaletteParamsModel): PaletteModel => _palette({ ...params });
