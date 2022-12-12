import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AppHome } from '@lib/frontend/app/containers/AppHome/AppHome';
import type { AppHomePropsModel } from '@lib/frontend/app/containers/AppHome/AppHome.models';

const { Default, meta } = withStory<AppHomePropsModel>({
  defaultProps: {},
  target: AppHome,
  variants: [],
});

export { Default, meta as default };
