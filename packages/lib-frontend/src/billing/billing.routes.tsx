import { CARDS } from '@lib/frontend/billing/billing.constants';
import { Cards } from '@lib/frontend/billing/containers/Cards/Cards';
import type { PagePropsModel } from '@lib/frontend/routing/components/Page/Page.models';

export const billingRoutes: Array<PagePropsModel> = [
  {
    element: <Cards />,
    isHeader: true,
    pathname: CARDS,
    title: CARDS,
  },
];
