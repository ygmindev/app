import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';
import type { UserTablePropsModel } from '@lib/frontend/user/containers/UserTable/UserTable.models';

const { Default, meta } = withStory<UserTablePropsModel>({
  defaultProps: {},
  target: UserTable,
  variants: [],
});

export { Default, meta as default };
