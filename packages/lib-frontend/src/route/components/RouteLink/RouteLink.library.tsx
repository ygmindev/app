import { RouteLink } from '@lib/frontend/route/components/RouteLink/RouteLink';
import { type RouteLinkPropsModel } from '@lib/frontend/route/components/RouteLink/RouteLink.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RouteLinkPropsModel> = {
  Component: RouteLink,
  defaultProps: {
    pathname: '',
  },
  variants: [],
};
