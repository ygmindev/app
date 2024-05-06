import { Route } from '@lib/frontend/route/components/Route/Route';
import { type RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RoutePropsModel> = {
  Component: Route,
  defaultProps: {
    route: { pathname: '' },
  },
  variants: [],
};
