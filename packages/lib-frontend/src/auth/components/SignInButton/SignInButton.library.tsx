import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import type { SignInButtonPropsModel } from '@lib/frontend/auth/components/SignInButton/SignInButton.models';

const { Story, meta } = withStory<SignInButtonPropsModel>({
  defaultProps: {},
  target: SignInButton,
  variants: [],
});

export default meta;

export { Story };
