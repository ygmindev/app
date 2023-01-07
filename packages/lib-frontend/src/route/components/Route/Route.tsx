import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { MeasureModel, SFCModel } from '@lib/frontend/core/core.models';
import { Active } from '@lib/frontend/route/components/Active/Active';
import type { RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useState } from 'react';

export const Route: SFCModel<RoutePropsModel> = ({ route, ...props }) => {
  const { styles } = useStyles({ props });
  const [measure, setMeasure] = useState<MeasureModel>();
  const theme = useTheme();
  return (
    <Wrapper
      animation={{
        duration: theme.animation.transition,
        ...(route.transition && measure && measure.width
          ? {
              exit: { left: -measure.width, opacity: 0 },
              from: { left: -measure.width, opacity: 0 },
              isActive: true,
              to: { left: 0, opacity: 1 },
            }
          : {}),
      }}
      grow
      isAbsoluteFill
      onMeasure={setMeasure}
      style={styles}>
      {route.element || null}

      {route.routes && (
        <Wrapper
          grow
          isOverflowHidden
          position={SHAPE_POSITION.RELATIVE}>
          <Active />
        </Wrapper>
      )}
    </Wrapper>
  );
};
