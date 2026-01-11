import { navigationRef } from '@lib/frontend/route/containers/Router/_Router.base';
import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import {
  type LocationParamsModel,
  type LocationUpdateModel,
} from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { waitFor } from '@lib/shared/core/utils/waitFor/waitFor';
import {
  type NavigationState,
  StackActions,
  useIsFocused,
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import { useCallback } from 'react';

export const _useRouter = <TType extends unknown>(): _UseRouterModel<TType> => {
  const navigation = useNavigation();

  const activeChild = useNavigationState((state) => {
    if (!state) return null;
    const currentState = state;
    let active = currentState.routes[currentState.index ?? 0];
    while (active?.state || (active as unknown as NavigationState)?.routes) {
      const next = (active.state || active) as unknown as NavigationState;
      const nextIndex = next.index ?? 0;
      if (!next.routes || !next.routes[nextIndex]) break;
      active = next.routes[nextIndex];
    }
    return active;
  });

  const route = useRoute();
  const isFocused = useIsFocused();

  const getNestedPathname = useCallback(
    (to: string, params: Record<string, unknown> = {}): [string, Record<string, unknown>] => {
      const fromParts = activeChild?.name?.split('/').filter(Boolean) ?? [];
      const toParts = to.split('/').filter(Boolean);
      let common = 0;
      while (
        common < fromParts.length &&
        common < toParts.length &&
        fromParts[common] === toParts[common]
      )
        common++;
      const newParts = toParts.slice(common);
      if (newParts.length === 0) {
        return [trimPathname(to), params];
      }
      const getParams = (parts: Array<string>, depth: number): Record<string, unknown> => {
        const screen = trimPathname(toParts.slice(0, common + depth + 1).join('/'));
        if (depth === parts.length - 1) {
          return params;
        }
        return { params: getParams(parts, depth + 1), screen };
      };
      return [trimPathname(toParts.slice(0, common + 1).join('/')), getParams(newParts, 0)];
    },
    [activeChild?.name],
  );

  const { params } = route;

  return {
    back: () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },

    isActive: ({ from, isExact = false, pathname } = {}) => {
      if (!pathname) return isFocused;
      const current = from ?? activeChild?.name;
      const target = pathname;
      const isMatch = current === target;
      return isExact ? isMatch : isMatch || (current?.startsWith(target) ?? false);
    },

    isMounted: isFocused,

    location: {
      params: ((params as Record<string, unknown>)?.screen
        ? (params as Record<string, unknown>)?.params
        : params) as TType & LocationParamsModel,
      pathname: route.name ?? '',
    },

    push: <TTypeNext,>({ params, pathname }: LocationUpdateModel<TTypeNext>) => {
      void waitFor({ condition: () => navigationRef.isReady() }).then(() => {
        console.warn(getNestedPathname(pathname, params));
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
