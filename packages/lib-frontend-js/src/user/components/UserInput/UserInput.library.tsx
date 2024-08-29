import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { UserInput } from '@lib/frontend/user/components/UserInput/UserInput';
import { type UserInputPropsModel } from '@lib/frontend/user/components/UserInput/UserInput.models';

export const props: LibraryPropsModel<UserInputPropsModel> = {
  Component: UserInput,
  defaultProps: {},
  variants: [],
};
