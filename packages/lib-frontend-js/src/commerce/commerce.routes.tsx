import { PAYMENT } from '@lib/frontend/billing/billing.constants';
import { OrderPaymentPage } from '@lib/frontend/billing/containers/OrderPaymentPage/OrderPaymentPage';
import { ORDER, PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { OrderProductsPage } from '@lib/frontend/commerce/pages/OrderProductsPage/OrderProductsPage';
import { OrderSuccessPage } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage';
import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { productsRoute } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.route';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { SUCCESS } from '@lib/shared/core/core.constants';

export const commerceRoutes: Array<RouteModel> = [
  {
    element: <OrderProductsPage />,
    header: { previous: true },
    navigation: ROUTE_NAVIGATION.TRANSITION,
    pathname: ORDER,
    routes: [
      {
        element: <OrderPaymentPage />,
        isProtectable: true,
        pathname: PAYMENT,
        title: ({ t }) => t('billing:payment'),
      },
      {
        element: <OrderSuccessPage />,
        pathname: SUCCESS,
      },
    ],
    title: ({ t }) => t('commerce:item_other'),
  },

  productsRoute,

  {
    element: <ProductPage />,
    pathname: `${PRODUCT}/:id`,
  },
];
