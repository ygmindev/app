import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { AnimatedRoute } from '@lib/frontend/routing/containers/AnimatedRoute/AnimatedRoute';
import type { AnimatedRoutePropsModel } from '@lib/frontend/routing/containers/AnimatedRoute/AnimatedRoute.models';

const { Default, meta } = withStory<AnimatedRoutePropsModel>({
  defaultProps: {},
  target: AnimatedRoute,
  variants: [],
});

export { Default, meta as default };
