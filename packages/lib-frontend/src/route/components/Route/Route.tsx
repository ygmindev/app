import {
  ANIMATION_STATES_APPEARABLE,
  ANIMATION_STATES_SLIDABLE,
} from '@lib/frontend/animation/animation.constants';
import { Protected } from '@lib/frontend/auth/components/Protected/Protected';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import type { RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { cloneElement, Fragment, useState } from 'react';

export const Route: SFCModel<RoutePropsModel> = ({ children, route, ...props }) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const [measure, setMeasure] = useState<MeasureModel>();

  const Container = route.isProtected ? Protected : Fragment;
  const _children = (
    <>
      {route.element}

      {children}
    </>
  );

  return (
    <Container>
      <Wrapper
        animation={
          route.transition && {
            duration: theme.animation.transition,
            states: merge({
              values: [ANIMATION_STATES_APPEARABLE, ANIMATION_STATES_SLIDABLE(measure)],
            }),
          }
        }
        isAbsoluteFill
        isFullWidth
        onMeasure={setMeasure}
        style={styles}>
        {route.layout ? cloneElement(route.layout, { children: _children }) : _children}
      </Wrapper>
    </Container>
  );
};
