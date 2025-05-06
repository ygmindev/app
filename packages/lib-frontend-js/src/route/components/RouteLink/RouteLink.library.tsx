import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { RouteLink } from '@lib/frontend/route/components/RouteLink/RouteLink';
import { type RouteLinkPropsModel } from '@lib/frontend/route/components/RouteLink/RouteLink.models';

export const props: LibraryPropsModel<RouteLinkPropsModel> = {
  Component: RouteLink,
  defaultProps: {
    pathname: '',
  },
  variants: [],
};
