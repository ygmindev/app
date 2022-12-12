import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Link } from '@lib/frontend/core/components/Link/Link';
import type { LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';

const { Default, meta } = withStory<LinkPropsModel>({
  defaultProps: {
    children: 'text',
  },
  target: Link,
});

export { Default, meta as default };
