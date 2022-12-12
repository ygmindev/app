import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { NotificationProvider } from '@lib/frontend/notification/providers/NotificationProvider/NotificationProvider';
import type { NotificationProviderPropsModel } from '@lib/frontend/notification/providers/NotificationProvider/NotificationProvider.models';

const { Default, meta } = withStory<NotificationProviderPropsModel>({
  defaultProps: {},
  target: NotificationProvider,
  variants: [],
});

export { Default, meta as default };
