import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface SlidesPropsModel extends WithChildrenPropsModel, WithStyleModel, WithTestIdModel {
  current?: number;
}
