import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { SsrPage } from '@lib/frontend/test/pages/SsrPage/SsrPage';
import { type SsrPagePropsModel } from '@lib/frontend/test/pages/SsrPage/SsrPage.models';

export const props: LibraryPropsModel<SsrPagePropsModel> = {
  Component: SsrPage,
  defaultProps: {},
  variants: [],
};
