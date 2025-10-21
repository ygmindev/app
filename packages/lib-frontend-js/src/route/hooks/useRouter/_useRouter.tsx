import { navigationRef } from '@lib/frontend/route/containers/Router/_Router';
import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import {
  type LocationParamsModel,
  type LocationUpdateModel,
} from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { StackActions, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';

export const _useRouter = <TType,>(): _UseRouterModel => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  const getNestedPathname = useCallback(
    (to: string, params: Record<string, unknown> = {}): [string, Record<string, unknown>] => {
      const fromParts = route.name.split('/').filter(Boolean);
      const toParts = to.split('/').filter(Boolean);
      const commonParts = fromParts.filter((p, i) => p === toParts[i]);

      const get = (depth: number = 0): Record<string, unknown> =>
        depth >= toParts.length
          ? params
          : { params: get(depth + 1), screen: trimPathname(toParts.slice(0, depth + 1).join('/')) };

      const currentDepth = Math.min(commonParts.length + 1, fromParts.length);
      return [trimPathname(toParts.slice(0, currentDepth).join('/')), get(currentDepth)];
    },
    [route.name],
  );

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
      console.warn(`@@@ ${route.name} -> ${pathname}`);
      console.warn(getNestedPathname(pathname, params));
      navigationRef.current?.dispatch(StackActions.push(...getNestedPathname(pathname, params)));
    },

    replace: <TTypeNext,>({ params, pathname }: LocationUpdateModel<TTypeNext>) => {
      navigationRef.current?.dispatch(StackActions.replace(...getNestedPathname(pathname, params)));
    },
  };
};
