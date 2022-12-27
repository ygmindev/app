import type { UseAnimationParamsModel } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.models';
import type { ViewPropsModel } from '@lib/frontend/core/components/View/View.models';

export interface AppearPropsModel extends ViewPropsModel, Omit<UseAnimationParamsModel, 'types'> {
  isScalable?: boolean;
}
