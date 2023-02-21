import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { _Router } from '@lib/frontend/route/containers/Router/_Router';
import type { RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import type { RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import trimEnd from 'lodash/trimEnd';
import { useMemo } from 'react';

const _getRoute = ({ pathname, ...route }: RouteModel): RouteModel => {
  const _isLeaf = !route.routes;
  const _root = trimEnd(pathname, '/*');
  const _pathname = trimPathname(_isLeaf ? pathname : `${_root}/*`);
  const _route: RouteModel = { ...route, pathname: _pathname };
  return {
    ..._route,
    element: (
      <Route route={_route}>
        {_route.routes && (
          <Wrapper
            grow
            isOverflowHidden
            position={SHAPE_POSITION.RELATIVE}>
            <_Router
              routes={_route.routes.map((child) =>
                _getRoute({
                  ...child,
                  header: child.header || _route.header,
                  root: trimPathname(`${route.root || ''}/${_root}`),
                }),
              )}
            />
          </Wrapper>
        )}
      </Route>
    ),
  };
};

export const Router: SFCModel<RouterPropsModel> = ({ routes, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const _routes = useMemo(() => routes.map(_getRoute), [routes]);
  return (
    <Wrapper
      grow
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      <_Router routes={_routes} />
    </Wrapper>
  );
};
