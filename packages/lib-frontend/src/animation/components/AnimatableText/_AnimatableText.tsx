import type { _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import { _getAnimatableProps } from '@lib/frontend/animation/utils/animatable/_animatable';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { MotiText } from 'moti';

export const _AnimatableText = composeComponent<_AnimatableTextPropsModel, TextPropsModel>({
  getComponent: () => Text,

  getProps: ({ delay, duration, from, isInfinite, onEnd, style, to, ...props }) => ({
    ...props,

    Component: MotiText,

    ..._getAnimatableProps({ delay, duration, from, isInfinite, onEnd, style, to }),
  }),
});
