import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { RouteTabs } from '#lib-frontend/route/components/RouteTabs/RouteTabs';
import { type RouteTabsPropsModel } from '#lib-frontend/route/components/RouteTabs/RouteTabs.models';

export const props: LibraryPropsModel<RouteTabsPropsModel> = {
  Component: RouteTabs,
  defaultProps: {},
  variants: [],
};
