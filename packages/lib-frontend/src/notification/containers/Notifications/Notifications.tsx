import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Notification } from '@lib/frontend/notification/components/Notification/Notification';
import { NOTIFICATIONS_MAX_WIDTH } from '@lib/frontend/notification/containers/Notifications/Notifications.constants';
import type { NotificationsPropsModel } from '@lib/frontend/notification/containers/Notifications/Notifications.models';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';

export const Notifications: SFCModel<NotificationsPropsModel> = () => {
  const alerts = useSelector((state) => state.notification.alerts);
  return alerts.length ? (
    <Wrapper
      bottom={0}
      left={0}
      m="auto"
      position={SHAPE_POSITION.ABSOLUTE}
      right={0}
      width={NOTIFICATIONS_MAX_WIDTH}
      zIndex={1}>
      {alerts.map((alert) => (
        <Notification
          {...alert}
          key={alert.id}
        />
      ))}
    </Wrapper>
  ) : null;
};
