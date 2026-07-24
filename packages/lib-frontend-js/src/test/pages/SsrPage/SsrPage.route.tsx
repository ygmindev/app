import { type RouteModel } from '@lib/frontend/route/route.models';
import { SsrPage } from '@lib/frontend/test/pages/SsrPage/SsrPage';
import { SSR } from '@lib/frontend/test/test.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const ssrRoute: RouteModel = {
  element: <SsrPage />,
  loaders: __SERVER_ONLY__(() => ({
    [SSR]: async () => {
      await sleep(1000);
      return 'SSR succeeded';
    },
  })),
  pathname: SSR,
  prerender: true,
};
