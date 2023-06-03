import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useMemo, useState } from 'react';

export const Slides: SFCModel<SlidesPropsModel> = ({ current, slides, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, measureSet] = useState<MeasureModel>();
  const [_current, currentSet] = useState(current);
  const _previous = useChange({ onChange: () => currentSet(current), value: current });
  const _isBack = useMemo(() => (_previous || 0) > (current || 0), [_previous, current]);
  return (
    <Wrapper
      grow
      isFullWidth
      isOverflowHidden
      onMeasure={measureSet}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Exitable>
        {slides &&
          slides.map(
            ({ element, id }, i) =>
              i === _current && (
                <Slide
                  isBack={_isBack}
                  key={id}
                  measure={measure}>
                  {element}
                </Slide>
              ),
          )}
      </Exitable>
    </Wrapper>
  );
};
