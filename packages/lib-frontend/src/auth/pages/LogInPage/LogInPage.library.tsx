import { LogInPage } from '@lib/frontend/auth/pages/LogInPage/LogInPage';
import type { LogInPagePropsModel } from '@lib/frontend/auth/pages/LogInPage/LogInPage.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<LogInPagePropsModel> = {
  Component: LogInPage,
  defaultProps: {},
  variants: [],
};
