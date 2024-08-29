import { type AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { type AsyncTextModel, type ChildrenPropsModel } from '@lib/frontend/core/core.models';

export type AsyncTextPropsModel = Omit<AnimatableTextPropsModel, 'children'> &
  ChildrenPropsModel<AsyncTextModel> & {
    ns?: Array<string>;
  };
