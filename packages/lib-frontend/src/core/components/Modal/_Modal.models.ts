import type { AnimationModel } from '#lib-frontend/animation/animation.models';
import type {
  ChildrenPropsModel,
  DimensionModel,
  ElementStatePropsModel,
} from '#lib-frontend/core/core.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type _ModalPropsModel = {
  deviceHeight?: number;
  deviceWidth?: number;
  isFullSize?: boolean;
  isOpen?: boolean;
  onClose?: CallableModel;
} & ChildrenPropsModel &
  DimensionModel &
  Pick<AnimationModel, 'duration'> &
  ElementStatePropsModel;
