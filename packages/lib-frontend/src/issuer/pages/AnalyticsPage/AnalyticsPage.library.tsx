import { AnalyticsPage } from '#lib-frontend/issuer/pages/AnalyticsPage/AnalyticsPage';
import { type AnalyticsPagePropsModel } from '#lib-frontend/issuer/pages/AnalyticsPage/AnalyticsPage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<AnalyticsPagePropsModel> = {
  Component: AnalyticsPage,
  defaultProps: {},
  variants: [],
};
