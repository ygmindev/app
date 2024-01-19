import { type CornerModel } from '@lib/frontend/core/core.models';
import { type ThemeColorPropsModel } from '@lib/frontend/style/style.models';

export type FloatingDotPropsModel = ThemeColorPropsModel & {
  corner?: CornerModel;
};
