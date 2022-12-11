import type { SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';
import { useAnimation } from '@lib/frontend/animation/hooks/useAnimation/useAnimation';
import { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { MeasureModel } from '@lib/frontend/core/utils/measure/measure.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useState } from 'react';

export const Slide: SFCModel<SlidePropsModel> = ({
  children,
  duration,
  isLazy,
  isVisible,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();

  const { animation, isRender } = useAnimation({
    duration,
    isLazy,
    isVisible,
    type: ANIMATION_TYPE.SLIDE,
    width: measure && measure.width,
  });

  return isRender ? (
    <Wrapper {...props} style={styles} testID={testID}>
      <Wrapper grow isOverflowHidden onMeasure={setMeasure} position={SHAPE_POSITION.RELATIVE}>
        {measure && (
          <Wrapper animation={animation} isAbsoluteFill isFullWidth>
            {children}
          </Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  ) : null;
};
