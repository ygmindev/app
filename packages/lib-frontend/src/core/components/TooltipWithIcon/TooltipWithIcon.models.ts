import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { ThemeColorModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface TooltipWithIconPropsModel extends WithChildrenPropsModel, WithTestIdModel {
  color?: ThemeColorModel;
}
