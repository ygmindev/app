import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface SlidesPropsModel
  extends WithChildrenPropsModel,
    WithStyleParamsModel,
    WithTestIdModel {
  current?: number;
}
