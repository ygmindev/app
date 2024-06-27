import {
  type ChildrenPropsModel,
  type DirectionModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';

export type RotatablePropsModel = ElementStatePropsModel &
  ChildrenPropsModel & {
    directionActive?: DirectionModel;
    directionInactive?: DirectionModel;
    isActive?: boolean;
  };
