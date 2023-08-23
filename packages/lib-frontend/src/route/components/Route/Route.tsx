import { cloneElement, Fragment, useState } from 'react';

import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
import { Slide } from '#lib-frontend/animation/components/Slide/Slide';
import { Protectable } from '#lib-frontend/auth/components/Protectable/Protectable';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type MeasureModel, type SFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type RoutePropsModel } from '#lib-frontend/route/components/Route/Route.models';
import { RouteHeader } from '#lib-frontend/route/containers/RouteHeader/RouteHeader';
import { Routes } from '#lib-frontend/route/containers/Routes/Routes';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { useTracking } from '#lib-frontend/tracking/hooks/useTracking/useTracking';
import {
  TRACKING_EVENT_ACTION,
  TRACKING_EVENT_OBJECT,
} from '#lib-shared/tracking/resources/TrackingEvent/TrackingEvent.constants';

export const Route: SFCModel<RoutePropsModel> = ({ depth, route, testID, ...props }) => {
  useTranslation(route.ns);

  const { styles } = useStyles({ props });
  const { isActive } = useRouter();
  const { track } = useTracking();
  const [measure, measureSet] = useState<MeasureModel>();
  const isBack = useStore((state) => state.route.isBack);
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
        grow
        position={SHAPE_POSITION.RELATIVE}
      />
    ),
    {
      children: route.routes && (
        <Wrapper
          grow
          isOverflowHidden
          onMeasure={measureSet}
          position={SHAPE_POSITION.RELATIVE}>
          <Routes
            depth={depth}
            routes={route.routes.map(({ element, ...child }) => ({
              ...child,
              element: (() => {
                switch (route.transition) {
                  case ROUTE_TRANSITION.SLIDE:
                    return (
                      <Slide
                        isBack={isBack}
                        measure={measure}>
                        {element}
                      </Slide>
                    );
                  default: {
                    return (
                      <Appearable
                        isAbsoluteFill
                        isActive={isActiveF}>
                        {element}
                      </Appearable>
                    );
                  }
                }
              })(),
            }))}
          />
        </Wrapper>
      ),
    },
  );

  const Container = route.isProtectable ? Protectable : Fragment;
  element = <Container>{element}</Container>;
  return (
    <>
      {isActiveLeaf && route.header && (
        <Portal>
          <RouteHeader route={route} />
        </Portal>
      )}

      <Wrapper
        {...route.layoutProps}
        grow
        isAbsoluteFill
        position={SHAPE_POSITION.RELATIVE}
        style={styles}
        testID={testID}>
        {route.routes &&
          route.navigator &&
          cloneElement(route.navigator, { key: 'navigator', routes: route.routes })}

        {element}
      </Wrapper>
    </>
  );
};
