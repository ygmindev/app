import { navigationRef } from '@lib/frontend/route/containers/Router/_Router.base';
import {
  type _UseRouterModel,
  type IsActiveParamsModel,
} from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import { type LocationModel, type LocationParamsModel } from '@lib/frontend/route/route.models';
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
import trimStart from 'lodash/trimStart';
import { useCallback } from 'react';

export const _useRouter = <TType extends unknown>(): _UseRouterModel<TType> => {
  const navigation = useNavigation();

  const activeChild = useNavigationState((state) => {
    if (!state) return null;
    const currentState = state;
    let active = currentState.routes[currentState.index ?? 0];
    while (active?.state || (active as unknown as NavigationState)?.routes) {
      const child = (active.state || active) as unknown as NavigationState;
      const childIndex = child.index ?? 0;
      if (!child.routes || !child.routes[childIndex]) break;
      active = child.routes[childIndex];
    }
    return active;
  });

  const route = useRoute();
  const isFocused = useIsFocused();

  const getNestedPathname = useCallback(
    (to: string, params: Record<string, unknown> = {}): [string, Record<string, unknown>] => {
      if (to.startsWith('#')) {
        return [route.name, { ...params, hash: trimStart(to, '#') }];
      }
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
        return { params: { ...params, ...getParams(parts, depth + 1) }, screen };
      };

      return [
        trimPathname(toParts.slice(0, common + 1).join('/')),
        { ...params, ...getParams(newParts, 0) },
      ];
    },
    [activeChild],
  );

  const isActive = ({
    from,
    isExact = false,
    isHashable = true,
    pathname,
  }: IsActiveParamsModel = {}): boolean => {
    const current = from ?? activeChild?.name;
    const isMatch = current === pathname;
    const result = isExact ? isMatch : isMatch || (current?.startsWith(pathname ?? '') ?? false);
    if (result) {
      return true;
    }
    const { hash } = (route.params ?? {}) as LocationParamsModel;
    return hash && isHashable
      ? isActive({ from: hash, isExact, isHashable: false, pathname: trimStart(pathname, '#') })
      : false;
  };

  return {
    back: () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    },

    isActive: (params) => {
      if (!params.pathname) return isFocused;
      return isActive(params);
    },

    isMounted: isFocused,

    location: {
      params: {
        ...(((route.params as Record<string, unknown>)?.screen
          ? (route.params as Record<string, unknown>)?.params
          : route.params) as TType & LocationParamsModel),
        ...(activeChild?.params ?? {}),
      },
      pathname: route.name ?? '',
    },

    push: <TTypeNext,>({ params, pathname }: LocationModel<TTypeNext>) => {
      void waitFor({ condition: () => navigationRef.isReady() }).then(() => {
        navigationRef.current?.navigate(...(getNestedPathname(pathname, params) as never));
      });
    },

    replace: <TTypeNext,>({ params, pathname }: LocationModel<TTypeNext>) => {
      void waitFor({ condition: () => navigationRef.isReady() }).then(() => {
        navigationRef.current?.dispatch(
          StackActions.replace(...getNestedPathname(pathname, params)),
        );
      });
    },
  };
};
