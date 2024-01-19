import { type AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';

export type AppearablePropsModel = WrapperPropsModel &
  AnimatablePropsModel & {
    isActive?: boolean;
    isScalable?: boolean;
  };
