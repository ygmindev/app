import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AdminHomePage } from '@lib/frontend/admin/pages/AdminHomePage/AdminHomePage';
import type { AdminHomePagePropsModel } from '@lib/frontend/admin/pages/AdminHomePage/AdminHomePage.models';

const { Story, meta } = withStory<AdminHomePagePropsModel>({
  defaultProps: {},
  target: AdminHomePage,
  variants: [],
});

export { Default, meta as default };
