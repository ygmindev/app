import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Redirect } from '@lib/frontend/route/components/Redirect/Redirect';
import type { RedirectPropsModel } from '@lib/frontend/route/components/Redirect/Redirect.models';

const { Story, meta } = withStory<RedirectPropsModel>({
  defaultProps: {
    params: undefined,
    pathname: '/',
  },
  target: Redirect,
  variants: [],
});

export default meta;

export { Story };
