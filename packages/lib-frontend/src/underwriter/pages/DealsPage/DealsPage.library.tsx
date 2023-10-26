import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { DealsPage } from '#lib-frontend/underwriter/pages/DealsPage/DealsPage';
import { type DealsPagePropsModel } from '#lib-frontend/underwriter/pages/DealsPage/DealsPage.models';

export const props: LibraryPropsModel<DealsPagePropsModel> = {
  defaultProps: {},
  Component: DealsPage,
  variants: [],
};
