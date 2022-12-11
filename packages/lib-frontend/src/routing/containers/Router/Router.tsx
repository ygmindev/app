import type { FCModel } from '@lib/frontend/core/core.models';
import { usePrevious } from '@lib/frontend/core/hooks/usePrevious/usePrevious';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { Page } from '@lib/frontend/routing/components/Page/Page';
import { _Router } from '@lib/frontend/routing/containers/Router/_Router';
import type {
  RouteComponentModel,
  RouterPropsModel,
} from '@lib/frontend/routing/containers/Router/Router.models';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { ROUTE_TRANSITION } from '@lib/frontend/routing/routing.constants';
import type { RouteModel } from '@lib/frontend/routing/routing.models';
import { actions } from '@lib/frontend/routing/stores/routingReducer/routingReducer';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { get, reduce } from 'lodash';
import { useMemo } from 'react';

const _pageToRoute = ({
  root = '/',
  routes,
}: {
  root?: string;
  routes: Array<RouteComponentModel>;
}): [Record<string, RouteModel>, Array<RouteComponentModel>] =>
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
      let [_routeMap] = result;
      const [, _routes] = result;
      const _pathname = trimPathname(`${root}/${pathname}`);
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
        const [_routeMapChild, _routesChild] = route.routes
          ? _pageToRoute({ root: _pathname, routes: route.routes })
          : [{}, []];
        _routeComponent = { ..._routeComponent, routes: _routesChild };
        _routeMap = merge({ values: [_routeMapChild, _routeMap] });
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
  const [_routeMap, _routes] = useMemo(() => _pageToRoute({ routes }), [routes]);

  usePrevious({
    onChange: (value) => {
      const previous = value && get(_routeMap, value.pathname);
      const current = location && get(_routeMap, location.pathname);
      previous && actions.setPrevious({ ...previous, title: t(previous.title) });
      current && actions.setCurrent({ ...current, title: t(current.title) });
    },
    value: location,
  });

  return <_Router {...props} routes={_routes} />;
};
