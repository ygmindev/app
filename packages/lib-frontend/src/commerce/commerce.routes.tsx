import { ORDER, PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { OrderPage } from '@lib/frontend/commerce/pages/OrderPage/OrderPage';
import { OrderSuccessPage } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage';
import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { productsRoute } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.route';
import { ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { SUCCESS } from '@lib/shared/core/core.constants';

export const commerceRoutes: Array<RouteModel> = [
  {
    pathname: ORDER,
    routes: [
      {
        element: <OrderPage />,
        pathname: '/',
      },
      {
        element: <OrderSuccessPage />,
        pathname: SUCCESS,
      },
    ],
    transition: ROUTE_TRANSITION.SLIDE,
  },

  productsRoute,

  {
    element: <ProductPage />,
    pathname: `${PRODUCT}/:id`,
  },
];
