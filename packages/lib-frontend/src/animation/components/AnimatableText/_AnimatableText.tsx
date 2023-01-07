import type { _AnimatableTextPropsModel } from '@lib/frontend/animation/components/AnimatableText/_AnimatableText.models';
import { _getAnimatableProps } from '@lib/frontend/animation/utils/animatable/_animatable';
import { _textParams } from '@lib/frontend/core/components/Text/_Text';
import type { PropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { TextStyleModel } from '@lib/frontend/style/style.models';
import { MotiText } from 'moti';

export const _AnimatableText = composeComponent<
  _AnimatableTextPropsModel,
  PropsModel<typeof MotiText>,
  TextStyleModel
>({
  ..._textParams,

  getComponent: () => MotiText,

  getProps: ({ animation, ...props }, theme) =>
    ({
      ...(_textParams.getProps ? _textParams.getProps(props, theme) : {}),
      ...(animation ? _getAnimatableProps(animation, theme) : {}),
    } as PropsModel<typeof MotiText>),
});
