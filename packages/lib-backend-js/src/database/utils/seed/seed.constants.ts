import { type SeedDataModel } from '@lib/backend/database/utils/seed/seed.models';
import { PRODUCT_RESOURCE_NAME } from '@lib/model/commerce/Product/Product.constants';
import { PRODUCT_FIXTURES } from '@lib/model/commerce/Product/Product.fixtures';
import { TESTABLE_EMBEDDED_RESOURCE_NAME } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { TESTABLE_EMBEDDED_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.fixtures';
import { TESTABLE_ENTITY_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TESTABLE_RELATED_RESOURCE_NAME } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.constants';
import { TESTABLE_RELATED_RESOURCE_SEED_DATA } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.fixtures';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { USER_FIXTURES } from '@lib/model/user/User/User.fixtures';
import { Container } from '@lib/shared/core/utils/Container/Container';

export const SEED_DATA: Array<SeedDataModel<unknown>> = [
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
    name: TESTABLE_ENTITY_RESOURCE_NAME,
  },

  {
    data: () => TESTABLE_EMBEDDED_RESOURCE_SEED_DATA,
    name: TESTABLE_EMBEDDED_RESOURCE_NAME,
    root: async () =>
      (await Container.get(TestableEntityResourceImplementation).getMany({ options: { take: 1 } }))
        .result?.[0]?._id,
  },

  {
    data: () => TESTABLE_RELATED_RESOURCE_SEED_DATA,
    name: TESTABLE_RELATED_RESOURCE_NAME,
    root: async () =>
      (await Container.get(TestableEntityResourceImplementation).getMany({ options: { take: 1 } }))
        .result?.[0]?._id,
  },
];
