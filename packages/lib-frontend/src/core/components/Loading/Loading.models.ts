import type { ThemeColorModel, ThemeSizeModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface LoadingPropsModel extends WithTestIdModel {
  color?: ThemeColorModel;
  size?: ThemeSizeModel;
}
