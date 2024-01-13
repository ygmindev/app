import { RouteList } from '@lib-frontend/route/components/RouteList2/RouteList';
import { type RouteListPropsModel } from '@lib-frontend/route/components/RouteList2/RouteList.models';
import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RouteListPropsModel> = {
  Component: RouteList,
  defaultProps: {},
  variants: [],
};
