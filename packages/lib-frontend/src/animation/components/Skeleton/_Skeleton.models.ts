import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { ReactElement } from 'react';

export interface _SkeletonPropsModel extends ChildrenPropsModel<ReactElement>, DimensionModel {
  backgroundColor: string;
  foregroundColor: string;
  radius: number;
}
