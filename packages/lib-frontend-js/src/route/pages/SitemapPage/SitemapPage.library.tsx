import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { SitemapPage } from '@lib/frontend/route/pages/SitemapPage/SitemapPage';
import { type SitemapPagePropsModel } from '@lib/frontend/route/pages/SitemapPage/SitemapPage.models';

export const props: LibraryPropsModel<SitemapPagePropsModel> = {
  defaultProps: {},
  Component: SitemapPage,
  variants: [],
};
