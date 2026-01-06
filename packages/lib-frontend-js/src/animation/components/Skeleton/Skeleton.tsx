import { type SkeletonPropsModel } from '@lib/frontend/animation/components/Skeleton/Skeleton.models';
import { SkeletonContext } from '@lib/frontend/animation/components/SkeletonGroup/SkeletonGroup';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useContext } from 'react';

export const Skeleton: LFCModel<SkeletonPropsModel> = ({ children, elementState, ...props }) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { elementState: elementStateGrouped } = useContext(SkeletonContext);
  return (
    <Wrapper
      {...wrapperProps}
      position={SHAPE_POSITION.RELATIVE}>
      {children}

      {(elementStateGrouped ?? elementState) === ELEMENT_STATE.LOADING && (
        <Wrapper
          animation={{
            duration: theme.animation.transition * 2,
            repeat: Infinity,
            states: {
              [ELEMENT_STATE.ACTIVE]: {
                backgroundColor: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MUTED],
              },
              [ELEMENT_STATE.INACTIVE]: {
                backgroundColor: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN],
              },
            },
          }}
          elementState={ELEMENT_STATE.ACTIVE}
          isAbsoluteFill
          round
          zIndex
        />
      )}
    </Wrapper>
  );
};
