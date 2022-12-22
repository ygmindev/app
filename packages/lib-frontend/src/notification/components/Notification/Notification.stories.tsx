import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Button } from '@lib/frontend/core/components/Button/Button';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { THEME_COLOR } from '@lib/frontend/style/utils/theme/theme.constants';

const Component: SFCModel<NotificationPropsModel> = ({ id: _, ...props }) => {
  const { add, remove, success, warn } = useNotification();
  return <Button onPress={() => add(props)}>alert</Button>;
};

const { Story, meta } = withStory<NotificationPropsModel>({
  defaultProps: { id: '', message: 'message' },
  displayName: 'Notification',
  target: Component,
  variants: [
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    { props: { icon: ICON.person } },
    { props: { title: 'title' } },
    { props: { icon: ICON.person, title: 'title' } },
  ],
});

export default meta;

export { Story };
