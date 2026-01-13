import { type FCModel } from '@lib/frontend/core/core.models';
import { Route } from '@lib/frontend/route/components/Route/Route';
import { type _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import {
  type LocationModel,
  type LocationParamsModel,
  type RouteModel,
} from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';
import { APP_URI } from '@lib/shared/http/http.constants';
import {
  createNavigationContainerRef,
  getPathFromState as _getPathFromState,
  getStateFromPath as _getStateFromPath,
  type LinkingOptions,
  NavigationContainer,
  type NavigationState,
  type ParamListBase,
  type PartialRoute,
  type PartialState,
  type PathConfigMap,
  type Route as RouteType,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { type ComponentType, type ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const navigationRef = createNavigationContainerRef();

const getStateFromPath: typeof _getStateFromPath = (path, config) => {
  const rootState = navigationRef.current?.getRootState();
  const child = rootState?.routes[rootState.index ?? 0];
  let { hash } = (child?.params ?? {}) as LocationParamsModel;
  const state = _getStateFromPath(path, config);
  if (state) {
    const child = state.routes[state.index ?? 0];
    if (!hash && typeof window !== 'undefined') {
      [, hash] = window.location.href.split('#');
    }
    (child as { params: LocationParamsModel }).params = { ...child.params, hash };
  }
  return state;
};

const getActive = (
  state: NavigationState | Omit<PartialState<NavigationState>, 'stale'>,
): PartialRoute<RouteType<string, object | undefined>> => {
  const route = state?.routes?.[state.index ?? 0];
  if (route?.state?.routes) {
    return getActive(route.state);
  }
  return route as PartialRoute<RouteType<string, object | undefined>>;
};

const getPathFromState: typeof _getPathFromState = (state, config): string => {
  const active = getActive(state) ?? state.routes[state.routes.length - 1];
  const path = _getPathFromState(state, config);
  let { hash } = (active.params ?? {}) as LocationParamsModel;
  let [url] = path.split('?');
  if (!hash) {
    [url, hash] = url.split('#');
  }
  return hash ? `${url}#${hash}` : url;
};

const getRouteConfig = (
  route: RouteModel,
  location?: LocationModel<unknown>,
  depth: number = 0,
): {
  config: LinkingOptions<EmptyObjectModel>['config'];
  element?: ReactElement;
} => {
  const Stack = createStackNavigator();
  const isLeaf = !route.routes;
  const result = {
    config: { path: route.pathname ?? '/' } as LinkingOptions<EmptyObjectModel>['config'],
    element: <Route route={route} />,
  };
  if (isLeaf) {
    return result;
  } else {
    const routesConfig = route.routes?.reduce(
      (r, v) => {
        const fullPathname = v.fullpath ?? v.pathname;
        const [screenName] = fullPathname.split('/:');
        const childConfig = getRouteConfig(v, location, depth + 1);
        const Component: ComponentType = () => <Route route={v}>{childConfig.element}</Route>;
        return {
          elements: [
            ...(r?.elements ?? []),
            <Stack.Screen
              component={Component}
              key={screenName}
              name={screenName}
            />,
          ],
          screens: {
            ...r?.screens,
            [screenName]: v.routes ? childConfig.config : v.pathname,
          },
        };
      },
      { elements: [], screens: {} } as {
        elements?: Array<ReactElement>;
        screens?: PathConfigMap<ParamListBase>;
      },
    );

    let initialRoute: string | undefined;
    if (location?.pathname && route.routes) {
      initialRoute = location.pathname
        .split('/')
        .slice(0, depth + 1)
        .join('/');
      initialRoute && (initialRoute = trimPathname(initialRoute));
      !Object.keys(routesConfig?.screens ?? {}).includes(initialRoute) &&
        (initialRoute = undefined);
    }

    result.config = {
      path: result.config?.path ?? '/',
      screens: routesConfig?.screens ?? {},
    };

    result.element = (
      <Stack.Navigator
        detachInactiveScreens={false}
        initialRouteName={initialRoute}
        key={route.fullpath ?? route.pathname}
        screenOptions={{
          animation: 'none',
          cardStyle: { backgroundColor: 'transparent', flex: 1, opacity: 1 },
          gestureEnabled: false,
          headerShown: false,
          presentation: 'transparentModal',
        }}>
        {routesConfig?.elements}
      </Stack.Navigator>
    );
  }

  return result;
};

export const _Router: FCModel<_RouterPropsModel> = ({ routes, value }) => {
  const { config, element } = getRouteConfig({ pathname: '/', routes }, value?.location);
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: { height: 0, width: 0, x: 0, y: 0 },
        insets: { bottom: 0, left: 0, right: 0, top: 0 },
      }}
      style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
      <NavigationContainer
        documentTitle={{ enabled: false }}
        linking={{
          config: { screens: config?.screens ?? {} },
          getPathFromState,
          getStateFromPath,
          prefixes: process.env.ENV_PLATFORM === 'web' ? [APP_URI] : [],
        }}
        ref={navigationRef}>
        {element}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
