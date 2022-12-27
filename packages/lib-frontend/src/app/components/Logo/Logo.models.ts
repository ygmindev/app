import type { ThemeBasicSizeModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface LogoPropsModel extends WithTestIdModel {
  size?: ThemeBasicSizeModel;
}
