import { type FCModel } from '@lib/frontend/core/core.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { type _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import { type LocationModel, type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';
import { APP_URI } from '@lib/shared/http/http.constants';
import {
  type LinkingOptions,
  NavigationContainer,
  type NavigationState,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { cloneElement, type ComponentType, type ReactElement } from 'react';

const getActivePathname = (state: NavigationState): string => {
  const route = state.routes[state.index ?? 0];
  if (route.state?.routes) {
    return trimPathname(getActivePathname(route.state as NavigationState));
  }
  return trimPathname(route.name);
};

const getRouteConfig = (
  route: RouteModel,
  location?: LocationModel,
  depth: number = 0,
): {
  config: LinkingOptions<EmptyObjectModel>['config'];
  element?: ReactElement;
} => {
  const elementF = (
    <Route
      depth={depth}
      route={route}
    />
  );
  const Stack = route.routes && createStackNavigator();
  const routesConfig = route.routes?.reduce(
    (result, v) => {
      const childConfig = getRouteConfig(v, location, depth + 1);
      const fullPathname = v.fullpath ?? v.pathname;

      const Component: ComponentType = () =>
        elementF && cloneElement(elementF, { children: childConfig.element });

      return {
        elements: [
          ...(result?.elements ?? []),
          ...(childConfig.element && Stack
            ? [
                <Stack.Screen
                  component={Component}
                  key={fullPathname}
                  name={fullPathname}
                />,
              ]
            : []),
        ],
        screens: {
          ...result?.screens,
          [fullPathname]: v.routes ? childConfig.config : v.pathname,
        },
      };
    },
    { elements: [], screens: {} } as {
      elements?: Array<ReactElement>;
      screens?: Record<string, unknown>;
    },
  );

  let initialRoute: string | undefined;
  if (location?.pathname && route.routes) {
    initialRoute = location.pathname
      .split('/')
      .slice(0, depth + 1)
      .join('/');
    initialRoute = trimPathname(initialRoute);
    !Object.keys(routesConfig?.screens ?? {}).includes(initialRoute) && (initialRoute = undefined);
  }

  return {
    config: {
      path: route.pathname ?? '/',
      ...(routesConfig?.screens ? { screens: routesConfig.screens } : {}),
    } as LinkingOptions<EmptyObjectModel>['config'],

    element:
      route.routes && Stack ? (
        <Stack.Navigator
          detachInactiveScreens={false}
          initialRouteName={initialRoute}
          key={route.fullpath ?? route.pathname}
          screenOptions={{
            cardStyle: { backgroundColor: 'transparent' },
            gestureEnabled: false,
            headerShown: false,
            presentation: 'transparentModal',
          }}>
          {routesConfig?.elements}
        </Stack.Navigator>
      ) : (
        elementF
      ),
  };
};

export const _Router: FCModel<_RouterPropsModel> = ({ routes, value }) => {
  const { config, element } = getRouteConfig({ pathname: '', routes }, value?.location);
  return (
    <NavigationContainer
      linking={
        {
          config: { screens: config?.screens },
          getPathFromState: (state) => getActivePathname(state as NavigationState),
          prefixes: process.env.ENV_PLATFORM === 'web' ? [APP_URI] : [],
        } as LinkingOptions<EmptyObjectModel>
      }>
      {element}
    </NavigationContainer>
  );
};

// import { type FCModel } from '@lib/frontend/core/core.models';
// import { Route } from '@lib/frontend/route/components/Route/Route';
// import { type _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
// import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
// import {
//   type LocationModel,
//   type LocationUpdateModel,
//   type RouteModel,
// } from '@lib/frontend/route/route.models';
// import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
// import { type EmptyObjectModel } from '@lib/shared/core/core.models';
// import { APP_URI } from '@lib/shared/http/http.constants';
// import {
//   type LinkingOptions,
//   NavigationContainer,
//   type NavigationState,
//   StackActions,
//   useIsFocused,
// } from '@react-navigation/native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {
//   cloneElement,
//   type ComponentType,
//   createContext,
//   type ReactElement,
//   type RefObject,
//   useCallback,
//   useContext,
//   useEffect,
//   useRef,
// } from 'react';

// export const _RouterContext = createContext<RefObject<_UseRouterModel | null>>({ current: null });

// const getActivePathname = (state: NavigationState): string => {
//   const route = state.routes[state.index ?? 0];
//   if (route.state?.routes) {
//     return trimPathname(getActivePathname(route.state as NavigationState));
//   }
//   return trimPathname(route.name);
// };

// const getRouteConfig = (
//   route: RouteModel,
//   location?: LocationModel,
//   depth: number = 0,
// ): {
//   config: LinkingOptions<EmptyObjectModel>['config'];
//   element?: ReactElement;
// } => {
//   const elementF = (
//     <Route
//       depth={depth}
//       route={route}
//     />
//   );
//   const Stack = route.routes && createStackNavigator();
//   const routesConfig = route.routes?.reduce(
//     (result, v) => {
//       const isLeaf = !v.routes;
//       const childConfig = getRouteConfig(v, location, depth + 1);
//       const fullPathname = v.fullpath ?? v.pathname;

//       const Component: ComponentType = () => {
//         const router = useContext(_RouterContext);
//         const navigation = useNavigation();
//         const currentRoute = useRoute();
//         const isFocused = useIsFocused();

//         const getNestedPathname = useCallback(
//           (to: string, params: Record<string, unknown> = {}): [string, Record<string, unknown>] => {
//             const fromParts = currentRoute.name.split('/').filter(Boolean);
//             const toParts = to.split('/').filter(Boolean);
//             const commonParts = fromParts.filter((p, i) => p === toParts[i]);

//             const get = (depth: number = 0): Record<string, unknown> =>
//               depth >= toParts.length
//                 ? params
//                 : {
//                     params: get(depth + 1),
//                     screen: trimPathname(toParts.slice(0, depth + 1).join('/')),
//                   };

//             const currentDepth = Math.min(commonParts.length + 1, fromParts.length);
//             return [trimPathname(toParts.slice(0, currentDepth).join('/')), get(currentDepth)];
//           },
//           [currentRoute.name],
//         );

//         useEffect(() => {
//           if (router && isLeaf && isFocused) {
//             const currentDepth = router?.current?.depth ?? -1;
//             if (depth >= currentDepth) {
//               router.current = {
//                 back: () => navigation.canGoBack() && navigation.goBack(),

//                 isActive: ({ from, isExact = false, pathname } = {}) => {
//                   if (!pathname) return isFocused;
//                   const current = from ?? currentRoute.name?.toLowerCase?.() ?? '';
//                   const target = pathname.toLowerCase();
//                   return isExact ? current === target : current.startsWith(target);
//                 },

//                 location: {
//                   params: route.params as Record<string, unknown>,
//                   pathname: currentRoute.name ?? '',
//                 },

//                 push: <TTypeNext,>({ params, pathname }: LocationUpdateModel<TTypeNext>) => {
//                   console.warn(`@@@ ${currentRoute.name} -> ${pathname}`);
//                   console.warn(getNestedPathname(pathname, params));
//                   // navigation.dispatch(StackActions.push(...getNestedPathname(pathname, params)));
//                 },

//                 replace: <TTypeNext,>({ params, pathname }: LocationUpdateModel<TTypeNext>) => {
//                   navigation.dispatch(StackActions.replace(...getNestedPathname(pathname, params)));
//                 },
//               };
//             }
//           }
//         }, [isFocused, navigation, route]);
//         return elementF && cloneElement(elementF, { children: childConfig.element });
//       };

//       return {
//         elements: [
//           ...(result?.elements ?? []),
//           ...(childConfig.element && Stack
//             ? [
//                 <Stack.Screen
//                   component={Component}
//                   key={fullPathname}
//                   name={fullPathname}
//                 />,
//               ]
//             : []),
//         ],
//         screens: {
//           ...result?.screens,
//           [fullPathname]: v.routes ? childConfig.config : v.pathname,
//         },
//       };
//     },
//     { elements: [], screens: {} } as {
//       elements?: Array<ReactElement>;
//       screens?: Record<string, unknown>;
//     },
//   );

//   let initialRoute: string | undefined;
//   if (location?.pathname && route.routes) {
//     initialRoute = location.pathname
//       .split('/')
//       .slice(0, depth + 1)
//       .join('/');
//     initialRoute = trimPathname(initialRoute);
//     !Object.keys(routesConfig?.screens ?? {}).includes(initialRoute) && (initialRoute = undefined);
//   }

//   return {
//     config: {
//       path: route.pathname ?? '/',
//       ...(routesConfig?.screens ? { screens: routesConfig.screens } : {}),
//     } as LinkingOptions<EmptyObjectModel>['config'],

//     element:
//       route.routes && Stack ? (
//         <Stack.Navigator
//           detachInactiveScreens={false}
//           initialRouteName={initialRoute}
//           key={route.fullpath ?? route.pathname}
//           screenOptions={{
//             cardStyle: { backgroundColor: 'transparent' },
//             gestureEnabled: false,
//             headerShown: false,
//             presentation: 'transparentModal',
//           }}>
//           {routesConfig?.elements}
//         </Stack.Navigator>
//       ) : (
//         elementF
//       ),
//   };
// };

// export const _Router: FCModel<_RouterPropsModel> = ({ routes, value }) => {
//   const { config, element } = getRouteConfig({ pathname: '', routes }, value?.location);
//   const ref = useRef<_UseRouterModel>(null);
//   return (
//     <_RouterContext.Provider value={ref}>
//       <NavigationContainer
//         linking={
//           {
//             config: { screens: config?.screens },
//             getPathFromState: (state) => getActivePathname(state as NavigationState),
//             prefixes: process.env.ENV_PLATFORM === 'web' ? [APP_URI] : [],
//           } as LinkingOptions<EmptyObjectModel>
//         }>
//         {element}
//       </NavigationContainer>
//     </_RouterContext.Provider>
//   );
// };
