import type { SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { MeasureModel } from '@lib/frontend/core/utils/measure/measure.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { useState } from 'react';

export const Slide: SFCModel<SlidePropsModel> = ({ children, isVisible, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();

  return (
    <Wrapper
      grow
      isOverflowHidden
      onMeasure={setMeasure}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      {measure && (
        <Wrapper
          animation={{ transition: ['left'] }}
          isAbsoluteFill
          left={isVisible ? 0 : measure.width}>
          {children}
        </Wrapper>
      )}
    </Wrapper>
  );
};
