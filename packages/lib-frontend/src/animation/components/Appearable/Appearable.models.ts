import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';

export interface AppearablePropsModel extends WrapperPropsModel, AnimatablePropsModel {
  isVisible?: boolean;
}
