import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
// import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
// import { RouteList } from '@lib/frontend/route/components/RouteList/RouteList';
import { TabLayout } from '@lib/frontend/route/components/TabLayout/TabLayout';
import { RouteHeader } from '@lib/frontend/route/containers/RouteHeader/RouteHeader';
import { Routes } from '@lib/frontend/route/containers/Routes/Routes';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { ROUTE_NAVIGATION, ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import {
  TRACKING_EVENT_ACTION,
  TRACKING_EVENT_OBJECT,
} from '@lib/shared/tracking/resources/TrackingEvent/TrackingEvent.constants';
import { cloneElement, useEffect } from 'react';

export const Route: LFCModel<RoutePropsModel> = ({ route, ...props }) => {
  useTranslation(route?.namespaces);

  const { wrapperProps } = useLayoutStyles({ props });
  const { isActive } = useRouter();
  const { track } = useTracking();

  const [isBack] = useStore('route.isBack');
  const isLeaf = !route.routes;
  const isActiveF = isActive({ pathname: route.fullpath });
  const isActiveLeaf = isLeaf && isActive({ isExact: true, pathname: route.fullpath });

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
      children: (
        <Wrapper
          flex
          isOverflowHidden
          position={SHAPE_POSITION.RELATIVE}>
          {route.element?.props.children}

          {route.routes && (
            <Routes
              depth={route.depth}
              routes={route.routes.map((child) => ({
                ...child,
                element: (() => {
                  switch (route.transition) {
                    case ROUTE_TRANSITION.SLIDE:
                      return <Slide isBack={isBack}>{child.element}</Slide>;
                    default:
                      return (
                        <Appearable
                          isAbsoluteFill
                          isActive={isActiveF}>
                          {child.element}
                        </Appearable>
                      );
                  }
                })(),
              }))}
            />
          )}
        </Wrapper>
      ),
    },
  );

  element = (() => {
    switch (route.navigation) {
      case ROUTE_NAVIGATION.NAVIGATION:
        return <NavigationLayout route={route}>{element}</NavigationLayout>;
      case ROUTE_NAVIGATION.TAB:
        return <TabLayout route={route}>{element}</TabLayout>;
      default:
        return element;
    }
  })();

  useEffect(() => {
    if (route.fullpath?.includes('sign-in')) {
      console.warn(
        `@@@ ${route.fullpath} isLeaf: ${isLeaf}, isActiveLeaf: ${isActiveLeaf}, isActiveF: ${isActiveF}`,
      );
      console.warn(route.element);
      console.warn(element);
      console.warn('\n\n');
    }
  }, []);

  return (
    <>
      {isActiveF && route.header && (
        <Portal>
          <RouteHeader route={route} />
        </Portal>
      )}

      <Wrapper
        {...wrapperProps}
        {...route.layoutProps}
        backgroundColor={THEME_COLOR_MORE.SURFACE}
        isAbsoluteFill
        zIndex>
        {element}
      </Wrapper>
    </>
  );
};
