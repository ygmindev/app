import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { EntityResourceTable } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';

const { Default, meta } = withStory<EntityResourceTablePropsModel>({
  defaultProps: {},
  target: EntityResourceTable,
  variants: [],
});

export { Default, meta as default };
