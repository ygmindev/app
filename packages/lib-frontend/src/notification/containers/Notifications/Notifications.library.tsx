import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { Notifications } from '@lib/frontend/notification/containers/Notifications/Notifications';
import { type NotificationsPropsModel } from '@lib/frontend/notification/containers/Notifications/Notifications.models';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<NotificationsPropsModel> = {
  Component: Notifications,
  Renderer: () => {
    const { add } = useNotification();
    return (
      <Wrapper
        isAlign
        isRow>
        {Object.values(THEME_COLOR).map((color) => (
          <Button
            color={color}
            key={color}
            onPress={() => add({ color, description: color })}>
            Notify
          </Button>
        ))}
      </Wrapper>
    );
  },
  category: 'notification',
  defaultProps: {},
  variants: [],
};
