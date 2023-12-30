import { PaymentMethodFormPage } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage';
import { PaymentMethodPage } from '#lib-frontend/billing/pages/PaymentMethodPage/PaymentMethodPage';
import { FORM } from '#lib-frontend/data/data.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';

export const billingRoutes = [
  {
    element: <PaymentMethodPage />,
    icon: 'wallet',
    pathname: '/',
    routes: [
      {
        element: <PaymentMethodFormPage />,
        pathname: FORM,
        title: ({ t }) => t('billing:paymentMethod'),
      },
    ],
    title: ({ t }) => t('billing:paymentMethod'),
  },
] satisfies Array<RouteModel>;
