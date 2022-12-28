import { AnimatableView } from '@lib/frontend/animation/components/AnimatableView/AnimatableView';
import type { AppearablePropsModel } from '@lib/frontend/animation/components/Appearable/Appearable.models';
import { useAnimation } from '@lib/frontend/animation/hooks/useAnimation/useAnimation';
import { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import type { AnimationTypeModel } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.models';
import type { SFCModel } from '@lib/frontend/core/core.models';

export const Appearable: SFCModel<AppearablePropsModel> = ({
  children,
  isScalable = true,
  ...props
}) => {
  const { animation, isRender } = useAnimation({
    ...props,
    types: [ANIMATION_TYPE.VISIBLE, isScalable && ANIMATION_TYPE.SCALE].filter(
      Boolean,
    ) as Array<AnimationTypeModel>,
  });

  return isRender ? (
    <AnimatableView
      animation={animation}
      {...props}>
      {children}
    </AnimatableView>
  ) : null;
};
