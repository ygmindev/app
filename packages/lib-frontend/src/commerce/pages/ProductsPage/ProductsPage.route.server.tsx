import { ProductImplementation } from '@lib/backend/commerce/resources/Product/ProductImplementation/ProductImplementation';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { type ProductsPageParamsModel } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.models';
import { productsRoute as productsPageBase } from '@lib/frontend/commerce/pages/ProductsPage/ProductsPage.route.base';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const productsPage: RouteModel<undefined, ProductsPageParamsModel> = {
  ...productsPageBase,
  loaders: {
    products: async () => Container.get(ProductImplementation).getConnection(),
  },
};
