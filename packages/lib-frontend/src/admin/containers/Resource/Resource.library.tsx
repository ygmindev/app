import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Resource } from '@lib/frontend/admin/containers/Resource/Resource';
import type { ResourcePropsModel } from '@lib/frontend/admin/containers/Resource/Resource.models';

const { Default, meta } = withStory<ResourcePropsModel>({
  defaultProps: {},
  target: Resource,
  variants: [],
});

export { Default, meta as default };
