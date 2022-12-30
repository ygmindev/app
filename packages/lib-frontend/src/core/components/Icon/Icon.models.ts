import type { AnimatablePropsModel } from '@lib/frontend/animation/animation.models';
import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';

export interface IconPropsModel
  extends _IconPropsModel,
    Omit<TextPropsModel, 'children'>,
    AnimatablePropsModel {}
