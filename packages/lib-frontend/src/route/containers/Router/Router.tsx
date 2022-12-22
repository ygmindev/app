import type { FCModel } from '@lib/frontend/core/core.models';
import { usePrevious } from '@lib/frontend/core/hooks/usePrevious/usePrevious';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { Page } from '@lib/frontend/route/components/Page/Page';
import { _Router } from '@lib/frontend/route/containers/Router/_Router';
import type {
  RouteComponentModel,
  RouterPropsModel,
} from '@lib/frontend/route/containers/Router/Router.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import type { RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
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
  const actions = useActions();
  const { t } = useTranslation();
  const { location } = useRouter();
  const [_routeMap, _routes] = useMemo(() => _pageToRoute({ routes }), [routes]);

  usePrevious({
    onChange: (value) => {
      const previous = value && get(_routeMap, value.pathname);
      const current = location && get(_routeMap, location.pathname);
      previous && actions?.route.previousSet({ ...previous, title: t(previous.title) });
      current && actions?.route.currentSet({ ...current, title: t(current.title) });
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
