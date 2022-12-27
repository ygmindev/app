import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';

export interface _AnimatableTextPropsModel
  extends Omit<TextPropsModel, 'Component'>,
    AnimatablePropsModel {}
