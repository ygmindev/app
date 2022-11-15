import type { FCModel } from '@lib/frontend/core/core.models';
import { usePrevious } from '@lib/frontend/core/hooks/usePrevious/usePrevious';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { dispatch } from '@lib/frontend/root/stores/store/store';
import { Page } from '@lib/frontend/routing/components/Page/Page';
import { _Router } from '@lib/frontend/routing/containers/Router/_Router';
import type {
  RouteComponentModel,
  RouterPropsModel,
} from '@lib/frontend/routing/containers/Router/Router.models';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { ROUTE_TRANSITION } from '@lib/frontend/routing/routing.constants';
import type { LocationModel, RouteModel } from '@lib/frontend/routing/routing.models';
import { routingActions } from '@lib/frontend/routing/stores/reducer/reducer';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { get, reduce } from 'lodash';
import { useMemo } from 'react';

const _pageToRoute = (
  routes: Array<RouteComponentModel>,
): [Record<string, RouteModel>, Array<RouteComponentModel>] =>
  reduce<RouteComponentModel, [Record<string, RouteModel>, Array<RouteComponentModel>]>(
    routes,
    (
      result,
      {
        Layout,
        element,
        isHeader,
        isIndex,
        isProtected,
        pathname = '/',
        title,
        transition = ROUTE_TRANSITION.SLIDE,
        ...route
      },
    ) => {
      const [_routeMap, _routes] = result;
      const _pathname = trimPathname(pathname);
      const _route: RouteModel = {
        isHeader,
        isIndex,
        isProtected,
        pathname: _pathname,
        title,
        transition,
      };
      let _routeComponent: RouteComponentModel = { ..._route, Layout, element };
      if (route.routes) {
        const [_routeMapChild, _routesChild] = route.routes ? _pageToRoute(route.routes) : [{}, []];
        _routeComponent = { ..._routeComponent, routes: _routesChild };
        _routeMap[_pathname] = _routeMapChild;
      } else {
        _routeMap[_pathname] = _route;
      }
      _routeComponent = { ..._routeComponent, element: <Page {..._routeComponent} /> };
      return [_routeMap, [..._routes, _routeComponent]];
    },
    [{}, []],
  );

export const Router: FCModel<RouterPropsModel> = ({ routes, ...props }) => {
  const { t } = useTranslation();
  const { location } = useRouter();
  const [_routeMap, _routes] = useMemo(() => _pageToRoute(routes), [routes]);

  const _getRoute = ({ pathname }: LocationModel): RouteModel | undefined => {
    const paths = pathname.split('/').map(trimPathname);
    return get(_routeMap, paths) || undefined;
  };

  usePrevious({
    onChange: (value) => {
      const previous = value && _getRoute(value);
      const current = location && _getRoute(location);
      previous && dispatch(routingActions.setPrevious({ ...previous, title: t(previous.title) }));
      current && dispatch(routingActions.setCurrent({ ...current, title: t(current.title) }));
    },
    value: location,
  });

  return (
    <_Router
      {...props}
      routes={_routes}
    />
  );
};
