import { type ChildrenPropsModel, type DimensionModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type _SkeletonPropsModel = ChildrenPropsModel<ReactElement> &
  DimensionModel & {
    backgroundColor: string;
    borderRadius: number;
    foregroundColor: string;
  };
