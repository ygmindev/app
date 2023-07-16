import { type AnimationModel } from '#lib-frontend/animation/animation.models';
import {
  type ChildrenPropsModel,
  type DimensionModel,
  type ElementStatePropsModel,
} from '#lib-frontend/core/core.models';

export type _ModalPropsModel = {
  deviceHeight?: number;
  deviceWidth?: number;
  isFullSize?: boolean;
  isOpen?: boolean;
  onClose?(): void;
} & ChildrenPropsModel &
  DimensionModel &
  Pick<AnimationModel, 'duration'> &
  ElementStatePropsModel;
