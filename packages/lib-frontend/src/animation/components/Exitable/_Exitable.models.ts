import { type AnimationModel } from '@lib/frontend/animation/animation.models';
import { type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type _ExitablePropsModel = ChildrenPropsModel & Pick<AnimationModel, 'isInitial'>;
