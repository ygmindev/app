import { HomePage } from '#lib-frontend/deleteme/pages/HomePage/HomePage';
import { type HomePagePropsModel } from '#lib-frontend/deleteme/pages/HomePage/HomePage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<HomePagePropsModel> = {
  Component: HomePage,
  defaultProps: {},
  variants: [],
};
