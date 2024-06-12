import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const PRODUCT_FIXTURES: Array<ProductModel> = getEntityResourceFixture({
  count: 10,
  data: ({ _id }) => ({
    [PRICING_RESOURCE_NAME]: getEntityResourceFixture({
      count: 2,
      data: () => ({
        [PRODUCT_RESOURCE_NAME]: { _id },
        price: 10,
      }),
    }),
    description: 'this is a test product',
    name: 'test product',
  }),
});
