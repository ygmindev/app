import { type ReactElement, useEffect } from 'react';

import { type FCPropsModel } from '#lib-frontend/core/core.models';
import { type RedirectPropsModel } from '#lib-frontend/route/components/Redirect/Redirect.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { type LocationParamsModel } from '#lib-frontend/route/route.models';

export const Redirect = <TType extends LocationParamsModel = LocationParamsModel>({
  isBack,
  params,
  pathname,
}: FCPropsModel<RedirectPropsModel<TType>>): ReactElement<
  FCPropsModel<RedirectPropsModel<TType>>
> => {
  const { replace } = useRouter();
  // const context = useContext(rootContext);

  useEffect(() => {
    void replace<TType>({ isBack, params, pathname });
  }, []);

  // if (isServer && context.route) {
  //   context.route.redirectTo = trimPathname(pathname);
  // }

  return <></>;
};
