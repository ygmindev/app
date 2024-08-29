import { type RouteModel } from '@lib/frontend/route/route.models';
import { SsrPage } from '@lib/frontend/test/pages/SsrPage/SsrPage';
import { SSR } from '@lib/frontend/test/test.constants';

export const ssrRoute: RouteModel = {
  element: <SsrPage />,
  pathname: SSR,
};
