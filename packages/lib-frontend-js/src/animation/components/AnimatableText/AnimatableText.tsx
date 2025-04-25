import { _AnimatableText } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText';
import { type _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import {
  type AnimatableTextPropsModel,
  type AnimatableTextRefModel,
} from '@lib/frontend/animation/components/AnimatableText/AnimatableText.models';
import { textParams } from '@lib/frontend/core/components/Text/Text';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type TextStyleModel } from '@lib/frontend/style/style.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const AnimatableText = composeComponent<
  AnimatableTextPropsModel,
  _AnimatableTextPropsModel,
  TextStyleModel,
  AnimatableTextRefModel
>({
  Component: _AnimatableText,

  stylers: textParams.stylers,
});

process.env.APP_IS_DEBUG && (AnimatableText.displayName = variableName({ AnimatableText }));
