import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';

import { _useRouter } from '#lib-frontend/route/hooks/useRouter/_useRouter';
import { type UseRouterModel } from '#lib-frontend/route/hooks/useRouter/useRouter.models';
import { type RouteUpdateModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const useRouter = <TType = object,>(): UseRouterModel<TType> => {
  const { back, getPath, isActive, location, push, replace } = _useRouter<TType>();
  const actions = useActions();
  const isLoading = useStore((state) => state.app.isLoading);
  const theme = useTheme();

  const update = async <TTypeNext = undefined,>(
    callback: () => void,
    { isBack }: Pick<RouteUpdateModel<TTypeNext>, 'isBack'>,
  ): Promise<void> => {
    if (!isLoading) {
      await sleep(100);
      actions?.route.previousSet({ pathname: location.pathname });
      if (isBack) {
        actions?.route.isBackSet(true);
        await sleep();
      }
      callback();
      if (isBack) {
        await sleep(theme.animation.transition);
        actions?.route.isBackSet(false);
      }
    }
  };

  const getRoot = (root?: string | boolean | number): string =>
    root
      ? isString(root)
        ? `${root}/`
        : isNumber(root)
          ? `${location.pathname.split('/').slice(0, root).join('/')}/`
          : root === true
            ? `${location.pathname}/`
            : ''
      : '';

  return {
    back: () => {
      void update(back, { isBack: true });
    },

    getPath,

    isActive: ({ from, pathname, ...params }) =>
      pathname
        ? isActive({
            from: from ? trimPathname(from) : undefined,
            pathname: trimPathname(pathname),
            ...params,
          })
        : false,

    location,

    push: <TTypeNext = undefined,>({
      isBack,
      params,
      pathname,
      root,
    }: RouteUpdateModel<TTypeNext>) => {
      void update(
        () =>
          push({
            context: { previous: location.pathname },
            params,
            pathname: trimPathname(`${getRoot(root)}${pathname}`),
          }),
        { isBack },
      );
    },

    replace: <TTypeNext = undefined,>({
      isBack,
      params,
      pathname,
      root,
    }: RouteUpdateModel<TTypeNext>) => {
      void update(
        () =>
          replace({
            context: { previous: location.pathname },
            params,
            pathname: trimPathname(`${getRoot(root)}${pathname}`),
          }),
        { isBack },
      );
    },
  };
};
