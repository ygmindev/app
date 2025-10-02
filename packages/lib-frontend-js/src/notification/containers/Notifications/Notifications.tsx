import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { Notification } from '@lib/frontend/notification/components/Notification/Notification';
import { type NotificationsPropsModel } from '@lib/frontend/notification/containers/Notifications/Notifications.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { Z_INDEX_TOP } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Notifications: SFCModel<NotificationsPropsModel> = () => {
  const [notifications] = useStore('notification.notifications');
  const theme = useTheme();
  return (
    <Portal>
      <Wrapper
        bottom={0}
        left={0}
        m="auto"
        pBottom
        position={SHAPE_POSITION.ABSOLUTE}
        right={0}
        s
        width={theme.notification.width}
        zIndex={Z_INDEX_TOP}>
        <Exitable>
          {notifications?.map((notification) => (
            <Notification
              key={notification.id}
              {...notification}
            />
          ))}
        </Exitable>
      </Wrapper>
    </Portal>
  );
};
