import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import type { SlidesPropsModel } from '@lib/frontend/core/components/Slides/Slides.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useChange } from '@lib/frontend/core/hooks/useChange/useChange';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { Children, useState } from 'react';
import { View as ViewWithAnimationProps } from 'react-native-animatable';

export const Slides: SFCModel<SlidesPropsModel> = ({ children, current, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const [width, setWidth] = useState<number>();
  const [previous, setPrevious] = useState<number>();

  useChange({ onChange: setPrevious, value: current });

  return (
    <Wrapper
      grow
      isAbsoluteFill
      isOverflowHidden
      onMeasure={({ width: containerWidth }) => setWidth(containerWidth)}
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      {width &&
        Children.map(children, (child, i) => {
          const isCurrent = current === i;
          const isPrevious = previous === i;
          return (
            (isCurrent || isPrevious) && (
              <ViewWithAnimationProps
                animation={
                  current === previous ? undefined : isCurrent ? 'slideInRight' : 'slideOutLeft'
                }
                duration={theme.animation.transition}
                style={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0 }}>
                <Appear
                  duration={theme.animation.transition}
                  grow
                  isVisible={isCurrent}>
                  {child}
                </Appear>
              </ViewWithAnimationProps>
            )
          );
        })}
    </Wrapper>
  );
};
