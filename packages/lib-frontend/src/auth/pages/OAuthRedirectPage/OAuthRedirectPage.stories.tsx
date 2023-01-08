import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { OAuthRedirectPage } from '@lib/frontend/auth/pages/OAuthRedirectPage/OAuthRedirectPage';
import type { OAuthRedirectPagePropsModel } from '@lib/frontend/auth/pages/OAuthRedirectPage/OauthRedirectPage.models';

const { Story, meta } = withStory<OAuthRedirectPagePropsModel>({
  defaultProps: {},
  target: OAuthRedirectPage,
  variants: [],
});

export { meta as default, Story };
