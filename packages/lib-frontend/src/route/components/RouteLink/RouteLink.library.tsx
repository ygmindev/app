import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { RouteLink } from '@lib/frontend/route/components/RouteLink/RouteLink';
import type { RouteLinkPropsModel } from '@lib/frontend/route/components/RouteLink/RouteLink.models';

const { Story, meta } = withStory<RouteLinkPropsModel>({
  defaultProps: {},
  target: RouteLink,
  variants: [],
});

export { Story, meta as default };
