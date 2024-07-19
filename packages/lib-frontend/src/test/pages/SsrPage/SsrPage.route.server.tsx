import { type RouteModel } from '@lib/frontend/route/route.models';
import { type SsrPageParamsModel } from '@lib/frontend/test/pages/SsrPage/SsrPage.models';
import { ssrRoute as ssrRouteBase } from '@lib/frontend/test/pages/SsrPage/SsrPage.route.base';
import { SSR } from '@lib/frontend/test/test.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const ssrRoute: RouteModel<undefined, SsrPageParamsModel> = {
  ...ssrRouteBase,
  loaders: {
    [SSR]: async () => {
      await sleep(1000);
      return 'SSR succeeded';
    },
  },
};
