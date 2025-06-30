import { PRICING_RESOURCE_NAME } from '@lib/model/commerce/Pricing/Pricing.constants';
import { type ProductModel } from '@lib/model/commerce/Product/Product.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const PRODUCT_FIXTURES: Array<ProductModel> = getEntityResourceFixture({
  count: 10,
  data: ({ index }) => ({
    [PRICING_RESOURCE_NAME]: getEntityResourceFixture({
      count: 3,
      data: () => ({ price: (index + 1) * 10 }),
    }),
    description: 'this is a test product',
    name: `test product ${index + 1}`,
  }),
});
