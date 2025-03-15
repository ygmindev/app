// import { ProductImplementation } from '@lib/backend/commerce/resources/Product/ProductImplementation/ProductImplementation';
// import { Container } from '@lib/shared/core/utils/Container/Container';
import { type ProductsPageParamsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { productsRoute as productsRouteBase } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.route.base';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const productsRoute: RouteModel<undefined, ProductsPageParamsModel> = {
  ...productsRouteBase,
  // loaders: () => ({
  //   products: async (context) => Container.get(ProductImplementation).getConnection({}, context),
  // }),
};
