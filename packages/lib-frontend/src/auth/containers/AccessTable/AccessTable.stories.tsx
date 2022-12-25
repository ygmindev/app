import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import type { AccessTablePropsModel } from '@lib/frontend/auth/containers/AccessTable/AccessTable.models';

const { Story, meta } = withStory<AccessTablePropsModel>({
  defaultProps: {},
  target: AccessTable,
  variants: [],
});

export default meta;

export { Story };