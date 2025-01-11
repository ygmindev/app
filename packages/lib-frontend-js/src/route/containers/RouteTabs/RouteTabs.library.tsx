import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { RouteTabs } from '@lib/frontend/js/route/containers/RouteTabs/RouteTabs';
import { type RouteTabsPropsModel } from '@lib/frontend/js/route/containers/RouteTabs/RouteTabs.models';

export const props: LibraryPropsModel<RouteTabsPropsModel> = {
  Component: RouteTabs,
  defaultProps: {},
  variants: [],
};
