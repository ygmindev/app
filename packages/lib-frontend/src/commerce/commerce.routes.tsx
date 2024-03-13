import { CART, PRODUCT } from '@lib/frontend/commerce/commerce.constants';
import { CartPage } from '@lib/frontend/commerce/pages/CartPage/CartPage';
import { ProductPage } from '@lib/frontend/commerce/pages/ProductPage/ProductPage';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const commerceRoutes: Array<RouteModel> = [
  {
    element: <CartPage />,
    pathname: CART,
  },
  {
    element: <ProductPage />,
    pathname: `${PRODUCT}/:id`,
  },
];
