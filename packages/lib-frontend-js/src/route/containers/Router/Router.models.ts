import { type _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import { type RouteContextModel } from '@lib/frontend/route/route.models';

export type RouterPropsModel = Pick<_RouterPropsModel, 'routes'> & {
  context?: RouteContextModel<unknown>;
};
