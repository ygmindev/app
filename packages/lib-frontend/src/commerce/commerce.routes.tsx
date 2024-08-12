import { ORDER, PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { OrderPage } from '@lib/frontend/commerce/pages/OrderPage/OrderPage';
import { OrderSuccessPage } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage';
import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { productsRoute } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.route';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { SUCCESS } from '@lib/shared/core/core.constants';

export const commerceRoutes: Array<RouteModel> = [
  {
    element: <OrderPage />,
    header: { previous: true },
    pathname: ORDER,
    routes: [
      {
        element: <OrderSuccessPage />,
        pathname: SUCCESS,
      },
    ],
  },

  productsRoute,

  {
    element: <ProductPage />,
    pathname: `${PRODUCT}/:id`,
  },
];
