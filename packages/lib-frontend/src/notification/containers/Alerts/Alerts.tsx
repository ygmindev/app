import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Alert } from '@lib/frontend/notification/components/Alert/Alert';
import { ALERTS_MAX_WIDTH } from '@lib/frontend/notification/containers/Alerts/Alerts.constants';
import type { AlertsPropsModel } from '@lib/frontend/notification/containers/Alerts/Alerts.models';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';

export const Alerts: SFCModel<AlertsPropsModel> = () => {
  const alerts = useSelector((state) => state.notification.alerts);
  return alerts.length ? (
    <Wrapper
      bottom={0}
      left={0}
      m="auto"
      position={SHAPE_POSITION.ABSOLUTE}
      right={0}
      width={ALERTS_MAX_WIDTH}
      zIndex={1}>
      {alerts.map((alert) => (
        <Alert
          {...alert}
          key={alert.id}
        />
      ))}
    </Wrapper>
  ) : null;
};
