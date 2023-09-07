import { type AnimationModel } from '#lib-frontend/animation/animation.models';
import {
  type ChildrenPropsModel,
  type DimensionModel,
  type ElementStatePropsModel,
} from '#lib-frontend/core/core.models';

export type _ModalPropsModel = ChildrenPropsModel &
  DimensionModel &
  ElementStatePropsModel &
  Pick<AnimationModel, 'duration'> & {
    deviceHeight?: number;
    deviceWidth?: number;
    isFullSize?: boolean;
    isOpen?: boolean;
    onToggle?(value?: boolean): void;
  };
