import { PAYMENT_METHOD } from '#lib-frontend/billing/billing.constants';
import { PaymentMethodFormPage } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage';
import { PaymentMethodPage } from '#lib-frontend/billing/pages/PaymentMethodPage/PaymentMethodPage';
import { FORM } from '#lib-frontend/data/data.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';

export const billingRoutes = [
  {
    element: <PaymentMethodPage />,
    pathname: PAYMENT_METHOD,
    routes: [
      {
        element: <PaymentMethodFormPage />,
        isFullScreen: true,
        pathname: FORM,
      },
    ],
    title: ({ t }) => t('billing:paymentMethod'),
  },
] satisfies Array<RouteModel>;
