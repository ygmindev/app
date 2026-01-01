import { navigationRef } from '@lib/frontend/route/containers/Router/_Router';
import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import {
  type LocationParamsModel,
  type LocationUpdateModel,
} from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { waitFor } from '@lib/shared/core/utils/waitFor/waitFor';
import {
  type NavigationRoute,
  type ParamListBase,
  StackActions,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback } from 'react';

export const _useRouter = <TType extends unknown>(): _UseRouterModel<TType> => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  const getNestedPathname = useCallback(
    (to: string, params: Record<string, unknown> = {}): [string, Record<string, unknown>] => {
      const fromParts = getLeaf().split('/').filter(Boolean);
      const toParts = to.split('/').filter(Boolean);
      let common = 0;
      while (
        common < fromParts.length &&
        common < toParts.length &&
        fromParts[common] === toParts[common]
      )
        common++;
      const get = (depth: number = 0): Record<string, unknown> =>
        depth >= toParts.length
          ? params
          : { params: get(depth + 1), screen: trimPathname(toParts.slice(0, depth + 1).join('/')) };

      const isDeep = common === fromParts.length && common < toParts.length;
      const currentDepth = isDeep ? common + 1 : Math.min(common, fromParts.length);
      return [trimPathname(toParts.slice(0, currentDepth).join('/')), get(currentDepth)];
    },
    [route.name],
  );

  const getLeaf = (): string => {
    const state = navigationRef.current?.getRootState();
    if (!state) {
      return route.name;
    }
    let active = state.routes[state.index];
    while (active.state && active.state.index != null) {
      active = active.state.routes[active.state.index] as NavigationRoute<ParamListBase, string>;
    }
    return active.name;
  };

  return {
    back: () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },

    isActive: ({ from, isExact = false, pathname } = {}) => {
      if (!pathname) return isFocused;
      const current = from ?? getLeaf();
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
      void waitFor({ condition: () => navigationRef.isReady() }).then(() => {
        navigationRef.current?.dispatch(StackActions.push(...getNestedPathname(pathname, params)));
      });
    },

    replace: <TTypeNext,>({ params, pathname }: LocationUpdateModel<TTypeNext>) => {
      void waitFor({ condition: () => navigationRef.isReady() }).then(() =>
        navigationRef.current?.dispatch(
          StackActions.replace(...getNestedPathname(pathname, params)),
        ),
      );
    },
  };
};
