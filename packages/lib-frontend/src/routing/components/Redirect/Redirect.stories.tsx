import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Redirect } from '@lib/frontend/routing/components/Redirect/Redirect';
import type { RedirectPropsModel } from '@lib/frontend/routing/components/Redirect/Redirect.models';

const { Default, meta } = withStory<RedirectPropsModel>({
  defaultProps: {},
  target: Redirect,
  variants: [],
});

export { Default, meta as default };
