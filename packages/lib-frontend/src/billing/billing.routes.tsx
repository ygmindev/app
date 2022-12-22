import { BILLING, PAYMENT_METHODS } from '@lib/frontend/billing/billing.constants';
import { PaymentMethods } from '@lib/frontend/billing/containers/PaymentMethods/PaymentMethods';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { REDIRECT } from '@lib/frontend/core/core.constants';
import type { PagePropsModel } from '@lib/frontend/route/components/Page/Page.models';

export const billingRoutes: Array<PagePropsModel> = [
  {
    pathname: BILLING,
    routes: [
      {
        pathname: PAYMENT_METHODS,
        routes: [
          {
            element: <PaymentMethods />,
            isHeader: true,
            isIndex: true,
            title: PAYMENT_METHODS,
          },

          {
            element: (
              <>
                <Text>redirect</Text>
              </>
            ),
            pathname: REDIRECT,
          },
        ],
      },
    ],
  },
];
