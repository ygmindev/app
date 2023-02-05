import { ANIMATION_STATES_APPEAR } from '@lib/frontend/animation/animation.constants';
import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Notification } from '@lib/frontend/notification/components/Notification/Notification';
import { NOTIFICATIONS_MAX_WIDTH } from '@lib/frontend/notification/containers/Notifications/Notifications.constants';
import type { NotificationsPropsModel } from '@lib/frontend/notification/containers/Notifications/Notifications.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Notifications: SFCModel<NotificationsPropsModel> = () => {
  const notifications = useStore((state) => state.notification.notifications);
  return notifications.length ? (
    <Portal>
      <Wrapper
        bottom={0}
        left={0}
        m="auto"
        pBottom
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        width={NOTIFICATIONS_MAX_WIDTH}
        zIndex={1}>
        <Exitable>
          {notifications.map((notification) => (
            <Wrapper
              animation={{ states: ANIMATION_STATES_APPEAR }}
              key={notification.id}>
              <Notification
                {...notification}
                key={notification.id}
              />
            </Wrapper>
          ))}
        </Exitable>
      </Wrapper>
    </Portal>
  ) : null;
};
