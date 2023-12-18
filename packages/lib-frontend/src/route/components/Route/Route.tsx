import { cloneElement } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Slide } from '#lib-frontend/animation/components/Slide/Slide';
import { Protectable } from '#lib-frontend/auth/components/Protectable/Protectable';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { type RoutePropsModel } from '#lib-frontend/route/components/Route/Route.models';
import { RouteHeader } from '#lib-frontend/route/containers/RouteHeader/RouteHeader';
import { Routes } from '#lib-frontend/route/containers/Routes/Routes';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useTracking } from '#lib-frontend/tracking/hooks/useTracking/useTracking';
import {
  TRACKING_EVENT_ACTION,
  TRACKING_EVENT_OBJECT,
} from '#lib-shared/tracking/resources/TrackingEvent/TrackingEvent.constants';

export const Route: LFCModel<RoutePropsModel> = ({ depth, route, ...props }) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { isActive } = useRouter();
  const { track } = useTracking();

  const isLeaf = !route.routes;
  const isActiveF = isActive({ pathname: route.fullpath });
  const isActiveLeaf = isLeaf && isActive({ isExact: true, pathname: route.fullpath });
  const isBack = useStore((state) => state.route.isBack);

  useAsync(async () => {
    isActiveLeaf &&
      (await track({ action: TRACKING_EVENT_ACTION.OPEN, object: TRACKING_EVENT_OBJECT.PAGE }));
  }, [isActiveLeaf]);

  let element = cloneElement(
    route.element ?? (
      <Wrapper
        flex
        position={SHAPE_POSITION.RELATIVE}
      />
    ),
    {
      children: route.routes && (
        <Wrapper
          flex
          isOverflowHidden
          position={SHAPE_POSITION.RELATIVE}>
          <Routes
            depth={depth}
            routes={route.routes.map(({ element, ...child }) => ({
              ...child,
              element: (() => {
                switch (route.transition) {
                  case ROUTE_TRANSITION.SLIDE:
                    return <Slide isBack={isBack}>{element}</Slide>;
                  default:
                    return (
                      <Appearable
                        isAbsoluteFill
                        isActive={isActiveF}>
                        {element}
                      </Appearable>
                    );
                }
              })(),
            }))}
          />
        </Wrapper>
      ),
    },
  );

  route.isProtectable && (element = <Protectable>{element}</Protectable>);

  element = (
    <Wrapper
      {...wrapperProps}
      {...route.layoutProps}
      backgroundColor={THEME_COLOR_MORE.SURFACE}
      isAbsoluteFill
      mTop={route.isFullScreen ? theme.layout.header.height : undefined}
      zIndex>
      {route.navigator &&
        route.routes &&
        cloneElement(route.navigator, { key: 'navigator', routes: route.routes })}

      {element}
    </Wrapper>
  );

  element = route.isFullScreen ? <Portal>{element}</Portal> : element;
  return (
    <>
      {isActiveF && route.header && (
        <Portal>
          <RouteHeader route={route} />
        </Portal>
      )}

      {element}
    </>
  );
};
