import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { AnalyticsPage } from '#lib-frontend/underwriter/pages/AnalyticsPage/AnalyticsPage';
import { type AnalyticsPagePropsModel } from '#lib-frontend/underwriter/pages/AnalyticsPage/AnalyticsPage.models';

export const props: LibraryPropsModel<AnalyticsPagePropsModel> = {
  defaultProps: {},
  Component: AnalyticsPage,
  variants: [],
};
