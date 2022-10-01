import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface SlidePropsModel
  extends WithChildrenPropsModel,
    WithStyleParamsModel,
    WithTestIdModel {
  current?: number;
}
