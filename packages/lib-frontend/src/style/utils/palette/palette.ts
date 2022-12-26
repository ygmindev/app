import { _palette } from '@lib/frontend/style/utils/palette/_palette';
import type { PaletteParamsModel } from '@lib/frontend/style/utils/palette/palette.models';

export const palette = (params: PaletteParamsModel): string => _palette({ ...params });
