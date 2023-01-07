import { _AnimatableText } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText';
import type { _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import type { AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { textParams } from '@lib/frontend/core/components/Text/Text';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { TextStyleModel } from '@lib/frontend/style/style.models';

export const AnimatableText = composeComponent<
  AnimatableTextPropsModel,
  _AnimatableTextPropsModel,
  TextStyleModel
>({
  ...textParams,

  getComponent: () => _AnimatableText,
});
