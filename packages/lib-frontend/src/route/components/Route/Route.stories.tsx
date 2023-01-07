import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Route } from '@lib/frontend/route/components/Route/Route';
import type { RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';

const { Story, meta } = withStory<RoutePropsModel>({
  defaultProps: {},
  target: Route,
  variants: [],
});

export { Story, meta as default };
