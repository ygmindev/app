import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { RegisterPage } from '@lib/frontend/auth/pages/RegisterPage/RegisterPage';
import type { RegisterPagePropsModel } from '@lib/frontend/auth/pages/RegisterPage/RegisterPage.models';

export const props: LibraryPropsModel<RegisterPagePropsModel> = {
  defaultProps: {},
  Component: RegisterPage,
  variants: [],
};
