import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AppHome } from '@lib/frontend/app/containers/AppHome/AppHome';
import type { AppHomePropsModel } from '@lib/frontend/app/containers/AppHome/AppHome.models';

const { Story, meta } = withStory<AppHomePropsModel>({
  defaultProps: {},
  target: AppHome,
  variants: [],
});

export default meta;

export { Story };
