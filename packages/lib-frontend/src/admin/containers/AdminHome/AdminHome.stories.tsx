import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AdminHome } from '@lib/frontend/admin/containers/AdminHome/AdminHome';
import type { AdminHomePropsModel } from '@lib/frontend/admin/containers/AdminHome/AdminHome.models';

const { Story, meta } = withStory<AdminHomePropsModel>({
  defaultProps: {},
  target: AdminHome,
  variants: [],
});

export default meta;

export { Story };
