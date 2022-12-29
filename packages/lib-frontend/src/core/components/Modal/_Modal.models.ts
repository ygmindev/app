import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _ModalPropsModel
  extends ChildrenPropsModel,
    DimensionModel,
    Pick<AnimationModel, 'duration'> {
  deviceHeight?: number;
  deviceWidth?: number;
  isDisabled?: boolean;
  isFullSize?: boolean;
  isOpen?: boolean;
  onClose?: CallableModel;
}
