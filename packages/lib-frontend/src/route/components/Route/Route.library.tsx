import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { type RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';

export const props: LibraryPropsModel<RoutePropsModel> = {
  Component: Route,
  defaultProps: {
    route: { pathname: '' },
  },
  variants: [],
};
