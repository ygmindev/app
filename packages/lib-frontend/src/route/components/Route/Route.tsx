import { cloneElement, Fragment, useMemo } from 'react';

import { Slide } from '#lib-frontend/animation/components/Slide/Slide';
import { Protectable } from '#lib-frontend/auth/components/Protectable/Protectable';
import { Portal } from '#lib-frontend/core/components/Portal/Portal';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
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
  const dimension = useStore((state) => state.app.dimension);
  const isBack = useStore((state) => state.route.isBack);
  const isLeaf = !route.routes;
  const isLeafActive = useMemo(
    () => isActive({ isExact: true, pathname: route.fullpath }),
    [route.fullpath],
  );
  const isActiveF = useMemo(() => isActive({ pathname: route.fullpath }), [route.fullpath]);
  const isLeafActiveF = isLeaf && isLeafActive;
  const transitionF =
    route.transition ?? (route.header?.previous ? ROUTE_TRANSITION.SLIDE : undefined);

  useAsync(async () => {
    isLeafActive &&
      (await track({ action: TRACKING_EVENT_ACTION.OPEN, object: TRACKING_EVENT_OBJECT.PAGE }));
  }, [isLeafActive]);

  console.warn(`@@@ ${route.fullpath} ${transitionF}`);
  console.warn('\n\n');

  const Container = route.isProtectable ? Protectable : Fragment;
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
          position={SHAPE_POSITION.RELATIVE}>
          <Routes
            depth={depth}
            routes={route.routes}
          />
        </Wrapper>
      ),
    },
  );
  element = <Container>{element}</Container>;

  element = useMemo(() => {
    switch (transitionF) {
      case ROUTE_TRANSITION.SLIDE:
        return (
          <Slide
            isBack={isBack}
            measure={dimension}
            style={styles}
            testID={testID}>
            {element}
          </Slide>
        );
      default:
        return (
          <Wrapper
            isAbsoluteFill
            isHidden={!isActiveF}
            style={styles}
            testID={testID}>
            {element}
          </Wrapper>
        );
    }
  }, [element, isBack, isLeaf, isActiveF, dimension, transitionF]);

  return (
    <>
      {isLeafActiveF && route.header && (
        <Portal>
          <RouteHeader route={route} />
        </Portal>
      )}

      {element}
    </>
  );
};

// import { cloneElement, Fragment, useMemo } from 'react';

// import { Appearable } from '#lib-frontend/animation/components/Appearable/Appearable';
// import { Slide } from '#lib-frontend/animation/components/Slide/Slide';
// import { Protectable } from '#lib-frontend/auth/components/Protectable/Protectable';
// import { Portal } from '#lib-frontend/core/components/Portal/Portal';
// import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
// import { type SFCModel } from '#lib-frontend/core/core.models';
// import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
// import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
// import { type RoutePropsModel } from '#lib-frontend/route/components/Route/Route.models';
// import { RouteHeader } from '#lib-frontend/route/containers/RouteHeader/RouteHeader';
// import { Routes } from '#lib-frontend/route/containers/Routes/Routes';
// import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
// import { ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
// import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
// import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
// import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
// import { useTracking } from '#lib-frontend/tracking/hooks/useTracking/useTracking';
// import {
//   TRACKING_EVENT_ACTION,
//   TRACKING_EVENT_OBJECT,
// } from '#lib-shared/tracking/resources/TrackingEvent/TrackingEvent.constants';

// export const Route: SFCModel<RoutePropsModel> = ({ depth, route, testID, ...props }) => {
//   useTranslation(route.ns);
//   const { styles } = useStyles({ props });
//   const { isActive } = useRouter();
//   const { track } = useTracking();
//   const dimension = useStore((state) => state.app.dimension);
//   const isBack = useStore((state) => state.route.isBack);
//   const isLeaf = !route.routes;
//   const isLeafActive = useMemo(
//     () => isActive({ isExact: true, pathname: route.fullpath }),
//     [route.fullpath],
//   );
//   const isActiveF = useMemo(() => isActive({ pathname: route.fullpath }), [route.fullpath]);
//   const isLeafActiveF = isLeaf && isLeafActive;
//   const transitionF =
//     route.transition ?? (route.header?.previous ? ROUTE_TRANSITION.SLIDE : undefined);

//   useAsync(async () => {
//     isLeafActive &&
//       (await track({ action: TRACKING_EVENT_ACTION.OPEN, object: TRACKING_EVENT_OBJECT.PAGE }));
//   }, [isLeafActive]);

//   const Container = route.isProtectable ? Protectable : Fragment;
//   let element = cloneElement(
//     route.element ?? (
//       <Wrapper
//         grow
//         position={SHAPE_POSITION.RELATIVE}
//       />
//     ),
//     {
//       children: route.routes && (
//         <Wrapper
//           grow
//           isOverflowHidden
//           position={SHAPE_POSITION.RELATIVE}>
//           <Routes
//             depth={depth}
//             routes={route.routes}
//           />
//         </Wrapper>
//       ),
//     },
//   );
//   element = <Container>{element}</Container>;

//   const childrenF = useMemo(() => {
//     if (isLeaf) {
//       switch (transitionF) {
//         case ROUTE_TRANSITION.SLIDE:
//           return (
//             <Slide
//               isBack={isBack}
//               measure={dimension}
//               style={styles}
//               testID={testID}>
//               {element}
//             </Slide>
//           );
//         default:
//           return (
//             <Appearable
//               isAbsoluteFill
//               isActive={isActiveF}
//               style={styles}
//               testID={testID}>
//               {element}
//             </Appearable>
//           );
//       }
//     }
//     return (
//       <Wrapper
//         isAbsoluteFill
//         style={styles}
//         testID={testID}>
//         {element}
//       </Wrapper>
//     );
//   }, [element, isBack, isLeaf, isActiveF, dimension, transitionF]);

//   return (
//     <>
//       {isLeafActiveF && route.header && (
//         <Portal>
//           <RouteHeader route={route} />
//         </Portal>
//       )}

//       {route.element?.props?.children}

//       {childrenF}
//     </>
//   );
// };
