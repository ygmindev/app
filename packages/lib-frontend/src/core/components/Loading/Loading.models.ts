import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type {
  TextStyleModel,
  ThemeColorModel,
  ThemeSizeModel,
} from '@lib/frontend/style/style.models';

export interface LoadingPropsModel extends AnimatablePropsModel<TextStyleModel> {
  color?: ThemeColorModel | string;
  size?: ThemeSizeModel;
}
