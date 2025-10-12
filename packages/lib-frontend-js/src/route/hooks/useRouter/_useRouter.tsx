import { type _UseRouterModel } from '@lib/frontend/route/hooks/useRouter/_useRouter.models';
import {
  type LocationParamsModel,
  type LocationUpdateModel,
} from '@lib/frontend/route/route.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { StackActions, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';

const getNestedPathname = (
  pathname: string,
  params: Record<string, unknown> = {},
): [string, Record<string, unknown>] => {
  const parts = pathname
    .split('/')
    .filter(Boolean)
    .map((v) => trimPathname(v));
  if (parts.length === 0) return [trimPathname(pathname), params];
  const get = (
    paths: Array<string>,
  ): [string, Record<string, unknown>] | { params?: unknown; screen: string } => {
    const [head, ...rest] = paths;
    if (rest.length === 0) return [head, params];
    return [head, { params: rest.length > 1 ? get(rest.slice(1)) : params, screen: rest[0] }];
  };
  return get(parts) as [string, Record<string, unknown>];
};

export const _useRouter = <TType,>(): _UseRouterModel<TType> => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  return {
    back: () => navigation.canGoBack() && navigation.goBack(),

    getPath: <TTypeNext,>(pathname: string, params?: TTypeNext) => {
      return pathname;
      // if (!params) return pathname;
      // const query = new URLSearchParams(params as Record<string, string>).toString();
      // return query ? `${pathname}?${query}` : pathname;
    },

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
      navigation.dispatch(StackActions.push(...getNestedPathname(pathname, params)));
    },

    replace: <TTypeNext,>({ params, pathname }: LocationUpdateModel<TTypeNext>) => {
      navigation.dispatch(StackActions.replace(...getNestedPathname(pathname, params)));
    },
  };
};
