import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { PingPage } from '@lib/frontend/http/pages/PingPage/PingPage';
import { type PingPagePropsModel } from '@lib/frontend/http/pages/PingPage/PingPage.models';

export const props: LibraryPropsModel<PingPagePropsModel> = {
  defaultProps: {},
  Component: PingPage,
  variants: [],
};
