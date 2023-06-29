import { _useRouter } from '#lib-frontend/route/hooks/useRouter/_useRouter';
import {
  type PathUpdateParamsModel,
  type UseRouterModel,
} from '#lib-frontend/route/hooks/useRouter/useRouter.models';
import { type LocationParamsModel } from '#lib-frontend/route/route.models';
import { trimPathname } from '#lib-frontend/route/utils/trimPathname/trimPathname';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const useRouter = <
  TParams extends LocationParamsModel = LocationParamsModel,
>(): UseRouterModel<TParams> => {
  const { back, isActive, location, push, replace } = _useRouter<TParams>();
  const actions = useActions();
  const isLoading = useStore((state) => state.app.isLoading);
  const theme = useTheme();

  const update = async <TNextParams extends LocationParamsModel = LocationParamsModel>(
    callback: CallablePromiseModel,
    { isBack }: Pick<PathUpdateParamsModel<TNextParams>, 'isBack'>,
  ): Promise<void> => {
    if (!isLoading) {
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

    push: async <TNextParams extends LocationParamsModel = LocationParamsModel>({
      isBack,
      params,
      pathname,
    }: PathUpdateParamsModel<TNextParams>) =>
      update(() => push({ params, pathname: trimPathname(pathname) }), { isBack }),

    replace: async <TNextParams extends LocationParamsModel = LocationParamsModel>({
      isBack,
      params,
      pathname,
    }: PathUpdateParamsModel<TNextParams>) =>
      update(() => replace({ params, pathname: trimPathname(pathname) }), { isBack }),
  };
};
