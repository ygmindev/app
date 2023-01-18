import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Protected } from '@lib/frontend/auth/components/Protected/Protected';
import type { ProtectedPropsModel } from '@lib/frontend/auth/components/Protected/Protected.models';

const { Story, meta } = withStory<ProtectedPropsModel>({
  defaultProps: {},
  target: Protected,
  variants: [],
});

export { Story, meta as default };
