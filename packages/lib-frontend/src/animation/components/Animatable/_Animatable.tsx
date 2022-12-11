import type {
  _AnimatableComponentPropsModel,
  _AnimatablePropsModel,
} from '@lib/frontend/animation/components/Animatable/_Animatable.models';
import { ANIMATABLE_TYPE } from '@lib/frontend/animation/components/Animatable/Animatable.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { MotiScrollView, MotiText, MotiView } from 'moti';
import type { ComponentType } from 'react';
import { createElement } from 'react';

export const _Animatable: SFCModel<_AnimatablePropsModel> = ({
  type = ANIMATABLE_TYPE.VIEW,
  testID,
  from,
  to,
  delay,
  isInfinite,
  duration,
  onEnd,
  ...props
}) => {
  const { styles } = useStyles({ props });

  const Component = (() => {
    switch (type) {
      case ANIMATABLE_TYPE.TEXT:
        return MotiText;
      case ANIMATABLE_TYPE.SCROLL_VIEW:
        return MotiScrollView;
      default:
        return MotiView;
    }
  })();

  return createElement(
    Component as ComponentType<_AnimatableComponentPropsModel>,
    {
      animate: to,
      from,
      onDidAnimate: onEnd,
      style: styles,
      testID,
      transition: { delay, duration, type: 'timing' },
    } as _AnimatableComponentPropsModel,
  );
};
