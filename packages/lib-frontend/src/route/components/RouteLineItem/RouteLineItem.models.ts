import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { type LocationModel } from '#lib-frontend/route/route.models';

export type RouteLineItemPropsModel = LineItemPropsModel & {
  root?: string | true;
  route: LocationModel;
};
