import { ORDER, PRODUCT, PRODUCTS } from '@lib/frontend/commerce/commerce.constants';
import { OrderPage } from '@lib/frontend/commerce/pages/OrderPage/OrderPage';
import { OrderSuccessPage } from '@lib/frontend/commerce/pages/OrderSuccessPage/OrderSuccessPage';
import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { ProductsPage } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { SUCCESS } from '@lib/shared/core/core.constants';

export const commerceRoutes: Array<RouteModel> = [
  {
    element: <OrderPage />,
    navigation: ROUTE_NAVIGATION.TRANSITION,
    pathname: ORDER,
    routes: [
      {
        element: <OrderSuccessPage />,
        pathname: SUCCESS,
      },
    ],
  },
  {
    element: <ProductsPage />,
    pathname: PRODUCTS,
  },
  {
    element: <ProductPage />,
    pathname: `${PRODUCT}/:id`,
  },
];
