import { CART } from '@lib/frontend/commerce/commerce.constants';
import { CartPage } from '@lib/frontend/commerce/pages/CartPage/CartPage';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const commerceRoutes: Array<RouteModel> = [
  {
    element: <CartPage />,
    isProtectable: true,
    pathname: CART,
  },
];
