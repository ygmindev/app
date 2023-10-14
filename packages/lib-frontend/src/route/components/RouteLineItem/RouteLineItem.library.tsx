import { RouteLineItem } from '#lib-frontend/route/components/RouteLineItem/RouteLineItem';
import { type RouteLineItemPropsModel } from '#lib-frontend/route/components/RouteLineItem/RouteLineItem.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RouteLineItemPropsModel> = {
  Component: RouteLineItem,
  defaultProps: {},
  variants: [],
};
