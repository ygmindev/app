import { _AnimatableText } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText';
import type { _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import type { AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { textParams } from '@lib/frontend/core/components/Text/Text';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const AnimatableText = composeComponent<AnimatableTextPropsModel, _AnimatableTextPropsModel>(
  {
    ...textParams,

    getComponent: () => _AnimatableText,
  },
);
