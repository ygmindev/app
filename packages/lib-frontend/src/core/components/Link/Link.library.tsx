import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Link } from '@lib/frontend/core/components/Link/Link';
import type { LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';

const { Story, meta } = withStory<LinkPropsModel>({
  defaultProps: {
    children: 'text',
  },
  target: Link,
});

export { meta as default, Story };
