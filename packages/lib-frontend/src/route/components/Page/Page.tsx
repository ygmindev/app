import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useIsAuthenticated } from '@lib/frontend/auth/hooks/useIsAuthenticated/useIsAuthenticated';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Active } from '@lib/frontend/route/components/Active/Active';
import type { PageModel } from '@lib/frontend/route/components/Page/Page.models';
import { Redirect } from '@lib/frontend/route/components/Redirect/Redirect';
import { Fragment } from 'react';

export const Page: SFCModel<PageModel> = ({ element, isProtected, Layout = Fragment, routes }) => {
  const isAuthenticated = useIsAuthenticated();
  const isInitialized = useIsInitialized();

  if (isProtected && isInitialized && !isAuthenticated) {
    return <Redirect pathname={SIGN_IN} />;
  }

  return (
    <Layout>
      {element}

      {routes && <Active />}
    </Layout>
  );
};
