import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { useAnimation } from '@lib/frontend/animation/hooks/useAnimation/useAnimation';
import { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { Children, useMemo, useState } from 'react';

export const Slides: SFCModel<SlidesPropsModel> = ({ children, current, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();
  const { animation } = useAnimation({
    isActive: true,
    measure,
    types: [ANIMATION_TYPE.VISIBLE, ANIMATION_TYPE.SLIDE],
  });
  const _children = useMemo(
    () => Children.toArray(children).map((child) => ({ element: child, key: uid() })),
    [children],
  );
  return (
    <Wrapper
      grow
      onMeasure={setMeasure}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <Exitable>
        {_children.map(
          ({ element, key }, i) =>
            i === current && (
              <Wrapper
                animation={animation}
                isAbsoluteFill
                isFullWidth
                key={key}>
                {element}
              </Wrapper>
            ),
        )}
      </Exitable>
    </Wrapper>
  );
};
