import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { QuoteFormPage } from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage';
import { type QuoteFormPagePropsModel } from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage.models';

export const props: LibraryPropsModel<QuoteFormPagePropsModel> = {
  defaultProps: {},
  Component: QuoteFormPage,
  variants: [],
};
