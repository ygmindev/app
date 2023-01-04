import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { UsernamePage } from '@lib/frontend/auth/pages/UsernamePage/UsernamePage';
import type { UsernamePagePropsModel } from '@lib/frontend/auth/pages/UsernamePage/UsernamePage.models';

const { Story, meta } = withStory<UsernamePagePropsModel>({
  defaultProps: {},
  target: UsernamePage,
  variants: [],
});

export { meta as default, Story };
