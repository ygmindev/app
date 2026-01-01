import { type AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { Text, textParams } from '@lib/frontend/core/components/Text/Text';

export const AnimatableText = animatable<AnimatableTextPropsModel>({
  Component: Text,

  stylers: textParams.stylers,
});
