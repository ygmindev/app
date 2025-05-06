import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { RouteHeader } from '@lib/frontend/route/containers/RouteHeader/RouteHeader';
import { type RouteHeaderPropsModel } from '@lib/frontend/route/containers/RouteHeader/RouteHeader.models';

export const props: LibraryPropsModel<RouteHeaderPropsModel> = {
  Component: RouteHeader,
  defaultProps: {
    route: { pathname: '' },
  },
  variants: [],
};
