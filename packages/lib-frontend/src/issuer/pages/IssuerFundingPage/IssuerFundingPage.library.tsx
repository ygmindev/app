import { IssuerFundingPage } from '#lib-frontend/issuer/pages/IssuerFundingPage/IssuerFundingPage';
import { type IssuerFundingPagePropsModel } from '#lib-frontend/issuer/pages/IssuerFundingPage/IssuerFundingPage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<IssuerFundingPagePropsModel> = {
  Component: IssuerFundingPage,
  defaultProps: {},
  variants: [],
};
