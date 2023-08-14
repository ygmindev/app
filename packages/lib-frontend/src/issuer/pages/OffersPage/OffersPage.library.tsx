import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { OffersPage } from '#lib-frontend/issuer/pages/OffersPage/OffersPage';
import { type OffersPagePropsModel } from '#lib-frontend/issuer/pages/OffersPage/OffersPage.models';

export const props: LibraryPropsModel<OffersPagePropsModel> = {
  defaultProps: {},
  Component: OffersPage,
  variants: [],
};
