import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { ThemeColorModel } from '@lib/frontend/style/utils/theme/theme.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface TooltipWithIconPropsModel extends WithChildrenPropsModel, WithTestIdModel {
  color?: ThemeColorModel;
}
