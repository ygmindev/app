import type { RedirectPropsModel } from '@lib/frontend/routing/components/Redirect/Redirect.models';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
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
