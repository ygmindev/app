import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import type { SignInPagePropsModel } from '@lib/frontend/auth/pages/SignInPage/SignInPage.models';

const { Story, meta } = withStory<SignInPagePropsModel>({
  defaultProps: {},
  target: SignInPage,
  variants: [],
});

export { meta as default, Story };
