import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';

export interface _IconPropsModel extends WithIconPropsModel, WithTestIdModel {
  style?: StyleModel;
}
