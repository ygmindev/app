import type {
  ThemeColorModel,
  ThemeSizeModel,
} from '@lib/frontend/styling/utils/theme/theme.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface LoadingPropsModel extends WithTestIdModel {
  color?: ThemeColorModel;
  size?: ThemeSizeModel;
}
