import { PRODUCTS } from '@lib/frontend/commerce/commerce.constants';
import { ProductsPage } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const productsRoute: RouteModel = {
  element: <ProductsPage />,
  pathname: PRODUCTS,
};
