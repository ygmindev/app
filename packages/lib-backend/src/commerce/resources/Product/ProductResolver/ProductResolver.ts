import { Product } from '@lib/backend/commerce/resources/Product/Product';
import { ProductImplementation } from '@lib/backend/commerce/resources/Product/ProductImplementation/ProductImplementation';
import { type ProductResolverModel } from '@lib/backend/commerce/resources/Product/ProductResolver/ProductResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/commerce/resources/Product/Product.models';

@withContainer()
@withResolver({ Resource: () => Product })
export class ProductResolver
  extends createEntityResourceResolver<ProductModel, ProductFormModel>({
    Resource: () => Product,
    ResourceImplementation: ProductImplementation,
    name: PRODUCT_RESOURCE_NAME,
  })
  implements ProductResolverModel {}
