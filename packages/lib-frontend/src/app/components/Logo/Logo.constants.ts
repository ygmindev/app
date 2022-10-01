import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { ThemeBasicSizeModel } from '@lib/frontend/styling/utils/theme/theme.models';

export const LOGO_SIZES: Record<ThemeBasicSizeModel, DimensionModel> = {
  l: { width: 200 },
  m: { width: 100 },
  s: { width: 50 },
};
