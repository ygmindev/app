import { BILLING, PAYMENT_METHOD } from '@lib/frontend/billing/billing.constants';
import { PaymentMethodPage } from '@lib/frontend/billing/pages/PaymentMethodPage/PaymentMethodPage';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const billingRoutes = [
  {
    element: <PaymentMethodPage />,
    icon: 'wallet',
    namespaces: [BILLING],
    pathname: PAYMENT_METHOD,
    title: ({ t }) => t('billing:paymentMethod_other'),
  },
] satisfies Array<RouteModel>;
