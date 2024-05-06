import { DependenciesPage } from '@lib/frontend/admin/pages/DependenciesPage/DependenciesPage';
import { type DependenciesPagePropsModel } from '@lib/frontend/admin/pages/DependenciesPage/DependenciesPage.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<DependenciesPagePropsModel> = {
  Component: DependenciesPage,
  defaultProps: {},
  variants: [],
};
