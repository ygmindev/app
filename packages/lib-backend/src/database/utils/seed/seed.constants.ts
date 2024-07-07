import { type SeedDataModel } from '@lib/backend/database/utils/seed/seed.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/shared/commerce/resources/Product/Product.constants';
import { PRODUCT_FIXTURES } from '@lib/shared/commerce/resources/Product/Product.fixtures';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { USER_FIXTURES } from '@lib/shared/user/resources/User/User.fixtures';

export const SEED_DATA = [
  {
    data: () => USER_FIXTURES,
    name: USER_RESOURCE_NAME,
  },

  {
    data: () => PRODUCT_FIXTURES,
    name: PRODUCT_RESOURCE_NAME,
  },

  {
    data: () => TESTABLE_ENTITY_RESOURCE_SEED_DATA,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  },
] satisfies Array<SeedDataModel<unknown>>;
