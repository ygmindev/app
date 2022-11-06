import type { SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { MeasureModel } from '@lib/frontend/core/utils/measure/measure.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { useState } from 'react';

export const Slide: SFCModel<SlidePropsModel> = ({
  children,
  isInitial,
  isVisible,
  testID,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();

  // TODO: handle isInitial in wrapper

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
          animation={{
            animation: isVisible
              ? { from: { left: measure.width }, to: { left: 0 } }
              : { from: { left: 0 }, to: { left: measure.width && -measure.width } },
            duration: theme.animation.transition,
          }}
          isAbsoluteFill
          isFullWidth>
          {children}
        </Wrapper>
      )}
    </Wrapper>
  );
};
