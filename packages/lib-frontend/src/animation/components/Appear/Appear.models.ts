import type { UseAnimationParamsModel } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.models';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';

export type AppearPropsModel = WrapperPropsModel & Omit<UseAnimationParamsModel, 'type'>;
