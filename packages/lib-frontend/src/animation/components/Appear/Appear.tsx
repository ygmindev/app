import type { AppearPropsModel } from '@lib/frontend/animation/components/Appear/Appear.models';
import { useAnimation } from '@lib/frontend/animation/hooks/useAnimation/useAnimation';
import { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const Appear: SFCModel<AppearPropsModel> = ({
  children,
  duration,
  isLazy = true,
  isScalable = true,
  isVisible,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { animation, isRender } = useAnimation({
    duration,
    isLazy,
    isScalable,
    isVisible,
    type: ANIMATION_TYPE.APPEAR,
  });

  return isRender ? (
    <Wrapper
      animation={animation}
      style={styles}
      {...props}>
      {children}
    </Wrapper>
  ) : null;
};
