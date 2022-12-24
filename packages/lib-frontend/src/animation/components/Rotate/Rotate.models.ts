import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface RotatePropsModel extends WithChildrenPropsModel, WithTestIdModel {
  x?: number;
  y?: number;
  z?: number;
}
