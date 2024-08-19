import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const PRODUCT_FIXTURES: Array<ProductModel> = getEntityResourceFixture({
  count: 10,
  data: ({ index }) => ({
    [PRICING_RESOURCE_NAME]: [
      getEntityResourceFixture({ data: () => ({ price: (index + 1) * 10 }) }),
    ],
    description: 'this is a test product',
    name: `test product ${index + 1}`,
  }),
});
