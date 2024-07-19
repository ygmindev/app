import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { Protectable } from '@lib/frontend/auth/components/Protectable/Protectable';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useAsync } from '@lib/frontend/core/hooks/useAsync/useAsync';
import { NavigationLayout } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
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
import { cloneElement } from 'react';

export const Route: LFCModel<RoutePropsModel> = ({ route, ...props }) => {
  useTranslation(route?.namespaces);

  const { wrapperProps } = useLayoutStyles({ props });
  const { isActive } = useRouter();
  const { track } = useTracking();

  const isLeaf = !route.routes;
  const isActiveF = isActive({ pathname: route.fullpath });
  const isActiveLeaf = isLeaf && isActive({ isExact: true, pathname: route.fullpath });
  const [isBack] = useStore('route.isBack');

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
            depth={route.depth}
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

  switch (route.navigation) {
    case ROUTE_NAVIGATION.NAVIGATION: {
      element = <NavigationLayout route={route}>{element}</NavigationLayout>;
      break;
    }
    case ROUTE_NAVIGATION.TAB: {
      element = <TabLayout route={route}>{element}</TabLayout>;
      break;
    }
    default:
      break;
  }

  route.isProtectable && (element = <Protectable>{element}</Protectable>);

  element = (
    <Wrapper
      {...wrapperProps}
      {...route.layoutProps}
      backgroundColor={THEME_COLOR_MORE.SURFACE}
      isAbsoluteFill
      zIndex>
      {element}
    </Wrapper>
  );

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
