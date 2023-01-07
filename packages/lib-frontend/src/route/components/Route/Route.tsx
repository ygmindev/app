import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import type { RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { useState } from 'react';

export const Route: SFCModel<RoutePropsModel> = ({ children, route, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();
  const theme = useTheme();
  return (
    <Wrapper
      animation={
        measure && measure.width
          ? {
              duration: theme.animation.transition,
              exit: { left: -measure.width, opacity: 0 },
              from: { left: measure.width, opacity: 0 },
              isActive: true,
              to: { left: 0, opacity: 1 },
            }
          : undefined
      }
      isAbsoluteFill
      isFullWidth
      onMeasure={setMeasure}
      style={styles}>
      {route.element}

      {children}
    </Wrapper>
  );
};
