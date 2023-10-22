import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { IssuerPage } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage';
import { type IssuerPagePropsModel } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage.models';

export const props: LibraryPropsModel<IssuerPagePropsModel> = {
  defaultProps: {},
  Component: IssuerPage,
  variants: [],
};
