import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import type { ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';

const { Default, meta } = withStory<ResourceTablePropsModel>({
  defaultProps: {},
  target: ResourceTable,
  variants: [],
});

export { Default, meta as default };
