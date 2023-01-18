import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { useAnimation } from '@lib/frontend/animation/hooks/useAnimation/useAnimation';
import { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useState } from 'react';

export const Slides: SFCModel<SlidesPropsModel> = ({ current, slides, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();
  const { animation } = useAnimation({
    isActive: true,
    isInitial: false,
    measure,
    types: [ANIMATION_TYPE.VISIBLE, ANIMATION_TYPE.SLIDE],
  });
  return (
    <Wrapper
      grow
      onMeasure={setMeasure}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Exitable>
        {slides &&
          slides.map(
            ({ element, id }, i) =>
              i === current && (
                <Wrapper
                  animation={animation}
                  isAbsoluteFill
                  isFullWidth
                  key={id}>
                  {element}
                </Wrapper>
              ),
          )}
      </Exitable>
    </Wrapper>
  );
};
