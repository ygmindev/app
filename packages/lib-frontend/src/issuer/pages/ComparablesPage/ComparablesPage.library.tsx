import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { ComparablesPage } from '#lib-frontend/issuer/pages/ComparablesPage/ComparablesPage';
import { type ComparablesPagePropsModel } from '#lib-frontend/issuer/pages/ComparablesPage/ComparablesPage.models';

export const props: LibraryPropsModel<ComparablesPagePropsModel> = {
  defaultProps: {},
  Component: ComparablesPage,
  variants: [],
};
