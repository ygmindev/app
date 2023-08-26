import { useMemo, useState } from 'react';

import { Exitable } from '#lib-frontend/animation/components/Exitable/Exitable';
import { Slide } from '#lib-frontend/animation/components/Slide/Slide';
import { type SlidesPropsModel } from '#lib-frontend/animation/components/Slides/Slides.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type MeasureModel, type SFCModel } from '#lib-frontend/core/core.models';
import { useChange } from '#lib-frontend/core/hooks/useChange/useChange';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Slides: SFCModel<SlidesPropsModel> = ({ current, slides, testID, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [measure, measureSet] = useState<MeasureModel>();
  const [currentF, currentSet] = useState(current);
  const previous = useChange(current, () => currentSet(current));
  const isBack = useMemo(() => (previous ?? 0) > (current ?? 0), [previous, current]);
  return (
    <Wrapper
      {...wrapperProps}
      grow
      isFullWidth
      isOverflowHidden
      onMeasure={measureSet}
      position={SHAPE_POSITION.RELATIVE}
      testID={testID}>
      <Exitable>
        {slides?.map(
          ({ element, id }, i) =>
            i === currentF && (
              <Slide
                isBack={isBack}
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
