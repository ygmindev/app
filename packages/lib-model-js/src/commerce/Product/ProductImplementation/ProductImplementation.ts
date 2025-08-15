import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { Product } from '@lib/model/commerce/Product/Product';
import { PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { type ProductImplementationModel } from '@lib/model/commerce/Product/ProductImplementation/ProductImplementation.models';

@withContainer()
export class ProductImplementation
  extends createEntityResourceImplementation<ProductModel>({
    Resource: Product,
    name: PRODUCT_RESOURCE_NAME,
  })
  implements ProductImplementationModel {}
