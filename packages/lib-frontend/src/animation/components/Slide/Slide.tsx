import { useMemo } from 'react';

import {
  ANIMATION_STATES_APPEARABLE,
  ANIMATION_STATES_SLIDABLE,
} from '#lib-frontend/animation/animation.constants';
import { type SlidePropsModel } from '#lib-frontend/animation/components/Slide/Slide.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const Slide: LFCModel<SlidePropsModel> = ({ children, isBack = false, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { width } = useStore((state) => state.app.dimension);
  const animation = useMemo(
    () => ({
      duration: theme.animation.transition,
      states: merge([ANIMATION_STATES_APPEARABLE, ANIMATION_STATES_SLIDABLE({ isBack, width })]),
    }),
    [width, theme, isBack],
  );
  return (
    <Wrapper
      {...wrapperProps}
      animation={animation}
      bottom={0}
      elementState={ELEMENT_STATE.ACTIVE}
      isFullWidth
      position={SHAPE_POSITION.ABSOLUTE}
      top={0}>
      {children}
    </Wrapper>
  );
};
