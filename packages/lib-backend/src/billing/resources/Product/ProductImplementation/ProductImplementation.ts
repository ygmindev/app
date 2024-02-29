import { Product } from '@lib/backend/billing/resources/Product/Product';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/billing/resources/Product/Product.constants';
import {
  type ProductFormModel,
  type ProductModel,
} from '@lib/shared/billing/resources/Product/Product.models';
import { type ProductImplementationModel } from '@lib/shared/billing/resources/Product/ProductImplementation/ProductImplementation.models';

@withContainer({ name: `${PRODUCT_RESOURCE_NAME}Implementation` })
export class ProductImplementation
  extends createEntityResourceImplementation<ProductModel, ProductFormModel>({
    Resource: Product,
    name: PRODUCT_RESOURCE_NAME,
  })
  implements ProductImplementationModel {}
