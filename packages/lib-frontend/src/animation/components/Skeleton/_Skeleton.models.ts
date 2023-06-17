import type { ReactElement } from 'react';

import type { ChildrenPropsModel, DimensionModel } from '#lib-frontend/core/core.models';

export type _SkeletonPropsModel = {
  backgroundColor: string;
  foregroundColor: string;
  radius: number;
} & ChildrenPropsModel<ReactElement> &
  DimensionModel;
