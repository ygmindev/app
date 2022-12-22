import type { RedirectPropsModel } from '@lib/frontend/route/components/Redirect/Redirect.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import type { ReactElement } from 'react';
import { useEffect } from 'react';

export const Redirect = <TParams = undefined,>({
  params,
  pathname,
}: RedirectPropsModel<TParams>): ReactElement<RedirectPropsModel<TParams>> => {
  const { replace } = useRouter();

  useEffect(() => {
    replace<TParams>({ params, pathname });
  }, []);

  return <></>;
};
