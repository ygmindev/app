import { _useRouter } from '@lib/frontend/route/hooks/useRouter/_useRouter';
import type {
  PathUpdateParamsModel,
  UseRouterModel,
} from '@lib/frontend/route/hooks/useRouter/useRouter.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { CallableModel } from '@lib/shared/core/core.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const useRouter = <TParams = void,>(): UseRouterModel<TParams> => {
  const { back, isActive, location, push, replace } = _useRouter<TParams>();
  const actions = useActions();
  const isLoading = useStore((state) => state.app.isLoading);
  const theme = useTheme();

  const _update = async <TNextParams = void,>({
    callback,
    isBack,
  }: Pick<PathUpdateParamsModel<TNextParams>, 'isBack'> & {
    callback: CallableModel;
  }): Promise<void> => {
    if (!isLoading) {
      actions?.route.previousSet({ pathname: location.pathname });
      if (isBack) {
        actions?.route.isBackSet(true);
        await sleep();
      }
      callback();
      if (isBack) {
        await sleep({ duration: theme.animation.transition });
        actions?.route.isBackSet(false);
      }
    }
  };

  return {
    back: async () => _update({ callback: back, isBack: true }),

    isActive: ({ from, pathname, ...params }) =>
      isActive({
        from: from ? trimPathname(from) : undefined,
        pathname: trimPathname(pathname),
        ...params,
      }),

    location,

    push: async <TNextParams = void,>({
      isBack,
      params,
      pathname,
    }: PathUpdateParamsModel<TNextParams>) =>
      _update({ callback: () => push({ params, pathname: trimPathname(pathname) }), isBack }),

    replace: async <TNextParams = void,>({
      isBack,
      params,
      pathname,
    }: PathUpdateParamsModel<TNextParams>) =>
      _update({ callback: () => replace({ params, pathname: trimPathname(pathname) }), isBack }),
  };
};
