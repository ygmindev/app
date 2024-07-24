import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { type RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import { Routes } from '@lib/frontend/route/containers/Routes/Routes';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useMemo } from 'react';

const getRoute = (route: RouteModel): RouteModel => {
  route.routes = route.routes && route.routes?.map(getRoute);
  route.element = <Route route={route} />;
  return route;
};

export const Router: LFCModel<RouterPropsModel> = ({ routes, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const routesF = useMemo(() => routes.map(getRoute), [routes]);
  return (
    <Wrapper
      {...wrapperProps}
      flex
      isOverflowHidden
      position={SHAPE_POSITION.RELATIVE}>
      <Routes routes={routesF} />
    </Wrapper>
  );
};
