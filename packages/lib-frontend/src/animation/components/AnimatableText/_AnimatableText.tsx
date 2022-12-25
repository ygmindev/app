import type { _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { AnimatableTextProps } from 'AnimatableText';
import { AnimatableText } from 'AnimatableText';

export const _AnimatableText = composeComponent<_AnimatableTextPropsModel, AnimatableTextProps>({
  getComponent: AnimatableText,
  getProps: () => ({}),
});
