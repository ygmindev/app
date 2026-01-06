import {
  type ChildrenPropsModel,
  type DimensionModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type SkeletonPropsModel = ChildrenPropsModel<ReactElement> &
  DimensionModel &
  ElementStatePropsModel;
