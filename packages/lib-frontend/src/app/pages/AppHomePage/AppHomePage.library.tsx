import { AppHomePage } from '@lib/frontend/app/pages/AppHomePage/AppHomePage';
import { type AppHomePagePropsModel } from '@lib/frontend/app/pages/AppHomePage/AppHomePage.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<AppHomePagePropsModel> = {
  Component: AppHomePage,
  defaultProps: {},
  variants: [],
};
