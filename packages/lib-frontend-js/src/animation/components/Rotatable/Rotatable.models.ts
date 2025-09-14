import { type DIRECTION } from '@lib/frontend/core/core.constants';
import {
  type ChildrenPropsModel,
  type ElementStatePropsModel,
} from '@lib/frontend/core/core.models';

export type RotatablePropsModel = ElementStatePropsModel &
  ChildrenPropsModel & {
    directionActive?: DIRECTION;
    isActive?: boolean;
  };
