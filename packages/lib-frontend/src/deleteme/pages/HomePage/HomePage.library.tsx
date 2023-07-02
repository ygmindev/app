import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { HomePage } from '#lib-frontend/deleteme/pages/HomePage/HomePage';
import { type HomePagePropsModel } from '#lib-frontend/deleteme/pages/HomePage/HomePage.models';

export const props: LibraryPropsModel<HomePagePropsModel> = {
  defaultProps: {},
  Component: HomePage,
  variants: [],
};
