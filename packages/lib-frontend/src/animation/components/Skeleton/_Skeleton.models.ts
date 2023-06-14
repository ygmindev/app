import type { ReactElement } from 'react';

import type { ChildrenPropsModel, DimensionModel } from '#lib-frontend/core/core.models';

export interface _SkeletonPropsModel extends ChildrenPropsModel<ReactElement>, DimensionModel {
  backgroundColor: string;
  foregroundColor: string;
  radius: number;
}
