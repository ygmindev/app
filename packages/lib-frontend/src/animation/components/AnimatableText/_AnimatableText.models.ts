import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { _ViewPropsModel } from '@lib/frontend/core/components/View/_View.models';

export interface _AnimatableTextropsModel
  extends Omit<_ViewPropsModel, 'Component'>,
    AnimatablePropsModel {}
