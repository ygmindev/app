import { navigationRef } from '@lib/frontend/route/containers/Router/_Router';
import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import {
  type LocationParamsModel,
  type LocationUpdateModel,
} from '@lib/frontend/route/route.models';
import {
  type NavigationRoute,
  type ParamListBase,
  StackActions,
  useIsFocused,
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';

export const _useRouter = <TType,>(): _UseRouterModel => {
  const navigation = useNavigation();
  const route = useRoute();
  // const isFocused = useNavigationState((state) => state.routes[state.index]?.name === route.name);
  const isFocused = useIsFocused();
  const state = useNavigationState((state) => state);

  return {
    back: () => navigation.canGoBack() && navigation.goBack(),

    isActive: ({ from, isExact = false, pathname } = {}) => {
      if (!pathname) return isFocused;

      let current = from;
      if (!from) {
        let active = state.routes[state.index];
        while (active.state && active.state.index != null) {
          active = active.state.routes[active.state.index] as NavigationRoute<
            ParamListBase,
            string
          >;
        }
        current = active.name;
      }
      const target = pathname;
      const isMatch = current === target;
      return isExact ? isMatch : isMatch || (current?.startsWith(target) ?? false);
    },

    isMounted: isFocused,

    location: {
      params: route.params as TType & LocationParamsModel,
      pathname: route.name ?? '',
    },

    push: <TTypeNext,>({ params, pathname }: LocationUpdateModel<TTypeNext>) => {
      navigationRef.current?.dispatch(StackActions.push(pathname, params));
    },

    replace: <TTypeNext,>({ params, pathname }: LocationUpdateModel<TTypeNext>) => {
      navigationRef.current?.dispatch(StackActions.replace(pathname, params));
    },
  };
};
