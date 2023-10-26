import { FundingFormPage } from '#lib-frontend/issuer/pages/FundingFormPage/FundingFormPage';
import { type FundingFormPagePropsModel } from '#lib-frontend/issuer/pages/FundingFormPage/FundingFormPage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FundingFormPagePropsModel> = {
  Component: FundingFormPage,
  defaultProps: {},
  variants: [],
};
