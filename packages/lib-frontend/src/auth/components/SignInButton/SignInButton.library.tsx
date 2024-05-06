import { SignInButton } from '@lib/frontend/auth/components/SignInButton/SignInButton';
import { type SignInButtonPropsModel } from '@lib/frontend/auth/components/SignInButton/SignInButton.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SignInButtonPropsModel> = {
  Component: SignInButton,
  defaultProps: {},
  variants: [],
};
