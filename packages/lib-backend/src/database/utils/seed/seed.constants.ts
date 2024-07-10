import { PricingImplementation } from '@lib/backend/commerce/resources/Pricing/PricingImplementation/PricingImplementation';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { type SeedDataModel } from '@lib/backend/database/utils/seed/seed.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { PRODUCT_FIXTURES } from '@lib/shared/commerce/resources/Product/Product.fixtures';
import { type ProductModel } from '@lib/shared/commerce/resources/Product/Product.models';
import { randomInt } from '@lib/shared/crypto/utils/randomInt/randomInt';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { USER_FIXTURES } from '@lib/shared/user/resources/User/User.fixtures';
import toNumber from 'lodash/toNumber';

export const SEED_DATA = [
  {
    data: () => USER_FIXTURES,
    name: USER_RESOURCE_NAME,
  },

  {
    afterCreate: async (output: OutputModel<RESOURCE_METHOD_TYPE.CREATE, ProductModel>) => {
      await Container.get(PricingImplementation).createMany({
        form: [{ price: toNumber(`${randomInt(10, 100)}.${randomInt(2)}`) }],
        root: output.result?._id,
      });
    },
    data: () => PRODUCT_FIXTURES,
    name: PRODUCT_RESOURCE_NAME,
  },

  {
    data: () => TESTABLE_ENTITY_RESOURCE_SEED_DATA,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  },
] satisfies Array<SeedDataModel<unknown>>;
