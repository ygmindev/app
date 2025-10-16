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
import { cloneElement, type ComponentClass, type ComponentType, type ReactElement } from 'react';

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
  const elementF = <Route route={route} />;
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
          screenOptions={{ headerShown: false }}>
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
        prefixes: process.env.ENV_PLATFORM === 'web' ? [APP_URI] : [],
      } as LinkingOptions<EmptyObjectModel>,
    };
  },
});
