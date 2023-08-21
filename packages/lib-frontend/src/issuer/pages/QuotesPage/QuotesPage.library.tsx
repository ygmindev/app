import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { QuotesPage } from '#lib-frontend/issuer/pages/QuotesPage/QuotesPage';
import { type QuotesPagePropsModel } from '#lib-frontend/issuer/pages/QuotesPage/QuotesPage.models';

export const props: LibraryPropsModel<QuotesPagePropsModel> = {
  defaultProps: {},
  Component: QuotesPage,
  variants: [],
};
