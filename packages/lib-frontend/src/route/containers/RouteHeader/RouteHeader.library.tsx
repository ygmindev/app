import { RouteHeader } from '@lib/frontend/route/containers/RouteHeader/RouteHeader';
import { type RouteHeaderPropsModel } from '@lib/frontend/route/containers/RouteHeader/RouteHeader.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RouteHeaderPropsModel> = {
  Component: RouteHeader,
  defaultProps: {},
  variants: [],
};
