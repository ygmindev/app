import { _useRouter } from '#lib-frontend/route/hooks/useRouter/_useRouter';
import { type UseRouterModel } from '#lib-frontend/route/hooks/useRouter/useRouter.models';
import { type RouteUpdateModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const useRouter = <TType = undefined,>(): UseRouterModel<TType> => {
  const { back, isActive, location, push, replace } = _useRouter<TType>();
  const actions = useActions();
  const isLoading = useStore((state) => state.app.isLoading);
  const theme = useTheme();

  const update = async <TNextType = undefined,>(
    callback: () => Promise<void>,
    { isBack }: Pick<RouteUpdateModel<TNextType>, 'isBack'>,
  ): Promise<void> => {
    if (!isLoading) {
      await sleep(100);
      actions?.route.previousSet({ pathname: location.pathname });
      if (isBack) {
        actions?.route.isBackSet(true);
        await sleep();
      }
      await callback();
      if (isBack) {
        await sleep(theme.animation.transition);
        actions?.route.isBackSet(false);
      }
    }
  };

  return {
    back: async () => update(back, { isBack: true }),

    isActive: ({ from, pathname, ...params }) =>
      pathname
        ? isActive({
            from: from ? trimPathname(from) : undefined,
            pathname: trimPathname(pathname),
            ...params,
          })
        : false,

    location,

    push: async <TNextType = undefined,>({
      isBack,
      params,
      pathname,
    }: RouteUpdateModel<TNextType>) =>
      update(
        () =>
          push({
            params: { ...params, previous: location.pathname },
            pathname: trimPathname(pathname),
          }),
        { isBack },
      ),

    replace: async <TNextType = undefined,>({
      isBack,
      params,
      pathname,
    }: RouteUpdateModel<TNextType>) =>
      update(
        () =>
          replace({
            params: { ...params, previous: location.pathname },
            pathname: trimPathname(pathname),
          }),
        { isBack },
      ),
  };
};
