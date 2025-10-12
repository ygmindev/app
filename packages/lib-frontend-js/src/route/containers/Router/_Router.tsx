import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { type _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import { type LocationModel, type RouteModel } from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';
import { APP_URI } from '@lib/shared/http/http.constants';
import {
  type LinkingOptions,
  NavigationContainer,
  type NavigationContainerProps,
  type NavigationState,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { cloneElement, type ComponentClass, type ReactElement } from 'react';

const getActivePathname = (state: NavigationState, root: string = ''): string => {
  const route = state.routes[state.index ?? 0];
  const pathname = `${root}/${route.name ?? ''}`;
  if (route.state?.routes) {
    return trimPathname(getActivePathname(route.state as NavigationState, pathname));
  }
  return trimPathname(pathname);
};

const getRouteConfig = (
  route: RouteModel,
  location?: LocationModel,
  depth: number = 0,
): {
  config: LinkingOptions<EmptyObjectModel>['config'];
  element?: ReactElement;
} => {
  const elementF = <Route route={route} />;
  const Stack = route.routes && createStackNavigator();
  const routesConfig = route.routes?.reduce(
    (result, v) => {
      const childConfig = getRouteConfig(v, location, depth + 1);
      return {
        elements: [
          ...(result?.elements ?? []),
          ...(childConfig.element && Stack
            ? [
                <Stack.Screen
                  key={v.pathname}
                  name={v.pathname}>
                  {() => elementF && cloneElement(elementF, { children: childConfig.element })}
                </Stack.Screen>,
              ]
            : []),
        ],
        screens: {
          ...result?.screens,
          [v.pathname]: v.routes ? childConfig.config : v.pathname,
        },
      };
    },
    { elements: [], screens: {} } as {
      elements?: Array<ReactElement>;
      screens?: Record<string, unknown>;
    },
  );

  let initialRoute: string | undefined;
  if (route.routes) {
    initialRoute = location?.pathname.split('/')[depth] ?? '';
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
          detachInactiveScreens
          initialRouteName={initialRoute}
          key={route.pathname}
          screenOptions={{ detachPreviousScreen: false, headerShown: false }}>
          {routesConfig?.elements}
        </Stack.Navigator>
      ) : (
        elementF
      ),
  };
};

export const _Router = composeComponent<_RouterPropsModel, NavigationContainerProps>({
  Component: NavigationContainer as unknown as ComponentClass<NavigationContainerProps>,

  getProps: ({ routes, value }) => {
    const { config, element } = getRouteConfig({ pathname: '', routes }, value?.location);
    return {
      children: element,
      linking: {
        config: { screens: config?.screens },
        getPathFromState: (state) => getActivePathname(state as NavigationState),
        // getStateFromPath: (path, options) => {
        //   const normalized = path.startsWith('/') ? path.slice(1) : path;
        //   return getStateFromPath(normalized, options);
        // },
        prefixes: process.env.ENV_PLATFORM === 'web' ? [APP_URI] : [],
      } as LinkingOptions<EmptyObjectModel>,
    };
  },
});
