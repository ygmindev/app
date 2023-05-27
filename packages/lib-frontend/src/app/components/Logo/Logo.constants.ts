import type { DimensionModel } from '@lib/frontend/core/core.models';
import type { ThemeSizeModel } from '@lib/frontend/style/style.models';

export const LOGO_SIZES: Record<ThemeSizeModel, DimensionModel> = {
  l: { width: 200 },
  m: { width: 100 },
  s: { width: 50 },
};
