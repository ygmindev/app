import type { ThemeBasicSizeModel } from '@lib/frontend/styling/utils/theme/theme.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface LogoPropsModel extends WithTestIdModel {
  size?: ThemeBasicSizeModel;
}
