import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface _IconPropsModel
  extends WithStyleParamsModel,
    WithIconPropsModel,
    WithTestIdModel {}
