import {
  ANIMATION_STATES_APPEARABLE,
  ANIMATION_STATES_SLIDABLE,
} from '@lib/frontend/animation/animation.constants';
import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { useMemo, useState } from 'react';

export const Slides: SFCModel<SlidesPropsModel> = ({
  current,
  isLeft,
  slides,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();
  const theme = useTheme();
  const [_current, setCurrent] = useState(current);
  const previous = useChange({ onChange: () => setCurrent(current), value: current });
  const _isLeft = useMemo(() => (previous || 0) > (current || 0), [previous, current]);
  return (
    <Wrapper
      grow
      isFullWidth
      isOverflowHidden
      onMeasure={setMeasure}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Exitable>
        {slides &&
          slides.map(
            ({ element, id }, i) =>
              i === _current && (
                <Wrapper
                  animation={{
                    duration: theme.animation.transition,
                    states: merge({
                      values: [
                        ANIMATION_STATES_APPEARABLE,
                        ANIMATION_STATES_SLIDABLE({ isLeft: isLeft || _isLeft, measure }),
                      ],
                    }),
                  }}
                  bottom={0}
                  elementState={ELEMENT_STATE.ACTIVE}
                  isFullWidth
                  key={id}
                  position={SHAPE_POSITION.ABSOLUTE}
                  top={0}>
                  {element}
                </Wrapper>
              ),
          )}
      </Exitable>
    </Wrapper>
  );
};
