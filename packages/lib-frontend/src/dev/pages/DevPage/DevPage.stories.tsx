import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { DevPage } from '@lib/frontend/dev/pages/DevPage/DevPage';
import type { DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';

const { Story, meta } = withStory<DevPagePropsModel>({
  defaultProps: {},
  target: DevPage,
  variants: [],
});

export { meta as default, Story };
