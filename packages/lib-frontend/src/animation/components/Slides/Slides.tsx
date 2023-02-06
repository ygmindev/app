import {
  ANIMATION_STATES_APPEARABLE,
  ANIMATION_STATES_SLIDABLE_RIGHT,
} from '@lib/frontend/animation/animation.constants';
import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { useState } from 'react';

export const Slides: SFCModel<SlidesPropsModel> = ({ current, slides, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();
  const theme = useTheme();
  return (
    <Wrapper
      grow
      isFullWidth
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
                  animation={{
                    duration: theme.animation.transition,
                    states: merge({
                      values: [
                        ANIMATION_STATES_APPEARABLE,
                        ANIMATION_STATES_SLIDABLE_RIGHT(measure),
                      ],
                    }),
                  }}
                  elementState={ELEMENT_STATE.ACTIVE}
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
