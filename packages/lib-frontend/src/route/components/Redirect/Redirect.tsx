import { type FCPropsModel } from '@lib/frontend/core/core.models';
import { rootContext } from '@lib/frontend/root/providers/ContextProvider/ContextProvider';
import { type RedirectPropsModel } from '@lib/frontend/route/components/Redirect/Redirect.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { isServer } from '@lib/platform/core/utils/isServer/isServer';
import { type ReactElement, useContext, useEffect } from 'react';

export const Redirect = <TType,>({
  isBack,
  params,
  pathname,
}: FCPropsModel<RedirectPropsModel<TType>>): ReactElement<
  FCPropsModel<RedirectPropsModel<TType>>
> => {
  const { replace } = useRouter();
  const context = useContext(rootContext);

  useEffect(() => {
    void replace<TType>({ isBack, params, pathname });
  }, []);

  if (isServer && context.route) {
    context.route.redirectTo = trimPathname(pathname);
  }

  return <></>;
};
