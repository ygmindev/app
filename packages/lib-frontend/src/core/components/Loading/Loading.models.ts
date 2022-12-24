import type { ThemeColorModel, ThemeSizeModel } from '@lib/frontend/style/utils/theme/theme.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface LoadingPropsModel extends WithTestIdModel {
  color?: ThemeColorModel;
  size?: ThemeSizeModel;
}
