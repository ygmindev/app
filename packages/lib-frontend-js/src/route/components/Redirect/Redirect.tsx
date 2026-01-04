import { type FCPropsModel } from '@lib/frontend/core/core.models';
import { RootContext } from '@lib/frontend/root/containers/ContextProvider/ContextProvider';
import { type RedirectPropsModel } from '@lib/frontend/route/components/Redirect/Redirect.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { ROUTE } from '@lib/shared/route/route.constants';
import { type ReactElement, useContext, useEffect } from 'react';

export const Redirect = <TType extends unknown>({
  params,
  pathname,
}: FCPropsModel<RedirectPropsModel<TType>>): ReactElement<
  FCPropsModel<RedirectPropsModel<TType>>
> => {
  const { replace } = useRouter();
  const context = useContext(RootContext);

  context[ROUTE] && (context[ROUTE].redirectTo = trimPathname(pathname));

  useEffect(() => {
    void replace<TType>({ params, pathname });
  }, []);

  return <></>;
};
