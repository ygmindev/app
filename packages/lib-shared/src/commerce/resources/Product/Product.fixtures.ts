import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const PRODUCT_FIXTURE: ProductModel = getEntityResourceFixture({
  data: () => ({
    [PRICING_RESOURCE_NAME]: [],
    description: 'this is a test product',
    name: 'test product',
  }),
});
