import { useAnimation } from '@lib/frontend/animation/hooks/useAnimation/useAnimation';
import { ANIMATION_TYPE } from '@lib/frontend/animation/hooks/useAnimation/useAnimation.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import type { RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useState } from 'react';

export const Route: SFCModel<RoutePropsModel> = ({ children, route, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();
  const { animation } = useAnimation({
    isActive: true,
    measure,
    types: [ANIMATION_TYPE.VISIBLE, ANIMATION_TYPE.SLIDE],
  });
  return (
    <Wrapper
      animation={animation}
      isAbsoluteFill
      isFullWidth
      onMeasure={setMeasure}
      style={styles}>
      {route.element}

      {children}
    </Wrapper>
  );
};
