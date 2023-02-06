import type { AnimationModel } from '@lib/frontend/animation/animation.models';
import type { ChildrenPropsModel } from '@lib/frontend/core/core.models';

export interface _ExitablePropsModel
  extends ChildrenPropsModel,
    Pick<AnimationModel, 'isInitial'> {}
