import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { type RouteListPropsModel } from '@lib/frontend/route/components/RouteList/RouteList.models';

export const props: LibraryPropsModel<RouteListPropsModel> = {
  Component: RouteList,
  defaultProps: {},
  variants: [],
};
