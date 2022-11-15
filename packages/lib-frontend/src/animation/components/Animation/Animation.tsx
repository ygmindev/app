import { ANIMATION_TYPE } from '@lib/frontend/animation/components/Animation/Animation.constants';
import type { AnimationPropsModel } from '@lib/frontend/animation/components/Animation/Animation.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { WithAnimationPropsModel } from '@lib/frontend/core/decorators/withAnimationProps/withAnimationProps.models';
import type { MeasureModel } from '@lib/frontend/core/utils/measure/measure.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { useMemo, useState } from 'react';

export const Animation: SFCModel<AnimationPropsModel> = ({
  children,
  duration,
  from,
  isScalable,
  isVisible,
  testID,
  to,
  type = ANIMATION_TYPE.APPEAR,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const [measure, setMeasure] = useState<MeasureModel>();

  const animation = useMemo<WithAnimationPropsModel>(() => {
    const _animation: WithAnimationPropsModel = { duration: duration || theme.animation.duration };
    switch (type) {
      case ANIMATION_TYPE.APPEAR: {
        _animation.animation = isVisible
          ? {
              from: { opacity: 0, transform: isScalable ? [{ scale: 0.9 }] : undefined },
              to: { opacity: 1, transform: isScalable ? [{ scale: 1.0 }] : undefined },
            }
          : {
              from: { opacity: 1, transform: isScalable ? [{ scale: 1.0 }] : undefined },
              to: { opacity: 0, transform: isScalable ? [{ scale: 0.9 }] : undefined },
            };
        break;
      }
      case ANIMATION_TYPE.SLIDE: {
        _animation.animation = measure
          ? isVisible
            ? { from: { left: measure.width }, to: { left: 0 } }
            : { from: { left: 0 }, to: { left: measure.width && -measure.width } }
          : undefined;
        break;
      }
      default: {
        _animation.animation = { from: from || {}, to: to || {} };
        break;
      }
    }
    return _animation;
  }, [type, isScalable, isVisible, children, duration, testID, from, to]);

  return (
    <Wrapper
      grow
      isOverflowHidden
      onMeasure={setMeasure}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Wrapper
        animation={animation}
        isAbsoluteFill
        isFullWidth>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
