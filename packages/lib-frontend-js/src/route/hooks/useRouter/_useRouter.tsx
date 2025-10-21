import { navigationRef } from '@lib/frontend/route/containers/Router/_Router';
import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import {
  type LocationParamsModel,
  type LocationUpdateModel,
} from '@lib/frontend/route/route.models';
import { StackActions, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

export const _useRouter = <TType,>(): _UseRouterModel => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  return {
    back: () => navigation.canGoBack() && navigation.goBack(),

    isActive: ({ from, isExact = false, pathname } = {}) => {
      if (!pathname) return isFocused;
      const current = from ?? route.name?.toLowerCase?.() ?? '';
      const target = pathname.toLowerCase();
      return isExact ? current === target : current.startsWith(target);
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
