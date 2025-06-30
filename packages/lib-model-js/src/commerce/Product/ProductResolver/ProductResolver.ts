import { Product } from '@lib/model/commerce/Product/Product';
import { ProductImplementation } from '@lib/model/commerce/Product/ProductImplementation/ProductImplementation';
import { type ProductResolverModel } from '@lib/model/commerce/Product/ProductResolver/ProductResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';

@withContainer()
@withResolver({ Resource: () => Product })
export class ProductResolver
  extends createEntityResourceResolver<ProductModel>({
    Resource: () => Product,
    ResourceImplementation: ProductImplementation,
    access: { default: ACCESS_LEVEL.PUBLIC },
    name: PRODUCT_RESOURCE_NAME,
  })
  implements ProductResolverModel {}
