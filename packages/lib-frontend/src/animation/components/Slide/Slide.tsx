import {
  ANIMATION_STATES_APPEARABLE,
  ANIMATION_STATES_SLIDABLE,
} from '@lib/frontend/animation/animation.constants';
import type { SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { useMemo } from 'react';

export const Slide: SFCModel<SlidePropsModel> = ({
  children,
  isBack = false,
  measure,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const _animation = useMemo(
    () => ({
      duration: theme.animation.transition,
      states: merge({
        values: [ANIMATION_STATES_APPEARABLE, ANIMATION_STATES_SLIDABLE({ isBack, measure })],
      }),
    }),
    [measure, theme, isBack],
  );
  return measure ? (
    <Wrapper
      animation={_animation}
      bottom={0}
      elementState={ELEMENT_STATE.ACTIVE}
      isFullWidth
      position={SHAPE_POSITION.ABSOLUTE}
      style={styles}
      testID={testID}
      top={0}>
      {children}
    </Wrapper>
  ) : null;
};
