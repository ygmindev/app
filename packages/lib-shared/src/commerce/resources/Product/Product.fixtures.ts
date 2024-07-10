import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
// import { PRICING_RESOURCE_NAME } from '@lib/shared/commerce/resources/Pricing/Pricing.constants';
// import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
// import toNumber from 'lodash/toNumber';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const PRODUCT_FIXTURES: Array<ProductModel> = getEntityResourceFixture({
  count: 10,
  data: ({ _id, index }) => ({
    // [PRICING_RESOURCE_NAME]: getEntityResourceFixture({
    //   count: 3,
    //   data: () => ({
    //     _product: { _id },
    //     price: toNumber(`${randomInt(10, 100)}.${randomInt(2)}`),
    //   }),
    // }),
    description: 'this is a test product',
    name: `test product ${index + 1}`,
  }),
});
