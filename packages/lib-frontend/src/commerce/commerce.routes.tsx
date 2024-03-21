import { ORDER, PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { OrderPage } from '@lib/frontend/commerce/pages/OrderPage/OrderPage';
import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const commerceRoutes: Array<RouteModel> = [
  {
    element: <OrderPage />,
    pathname: ORDER,
  },
  {
    element: <ProductPage />,
    pathname: `${PRODUCT}/:id`,
  },
];
