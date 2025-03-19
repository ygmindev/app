import { type SeedDataModel } from '@lib/backend/database/utils/seed/seed.models';
import { TestableEntityResourceImplementation } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { TESTABLE_EMBEDDED_RESOURCE_SEED_DATA } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.fixtures';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.constants';
import { TESTABLE_RELATED_RESOURCE_SEED_DATA } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.fixtures';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { USER_FIXTURES } from '@lib/shared/user/resources/User/User.fixtures';

export const SEED_DATA = [
  {
    data: () => USER_FIXTURES,
    name: USER_RESOURCE_NAME,
  },

  // {
  //   afterCreate: async (output: OutputModel<RESOURCE_METHOD_TYPE.CREATE, ProductModel>) => {
  //     const pricing = PRODUCT_FIXTURES.find(
  //       ({ _id }) => output.result?._id && toString(output.result._id) === _id,
  //     )?.[PRICING_RESOURCE_NAME]?.[0];
  //     pricing &&
  //       (await Container.get(PricingImplementation).createMany({
  //         form: [{ price: pricing.price }],
  //         root: output.result?._id,
  //       }));
  //   },
  //   data: () => PRODUCT_FIXTURES.map(({ Pricing: _, ...params }) => params),
  //   name: PRODUCT_RESOURCE_NAME,
  // },

  {
    data: () => TESTABLE_ENTITY_RESOURCE_SEED_DATA,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  },

  {
    data: () => TESTABLE_EMBEDDED_RESOURCE_SEED_DATA,
    name: TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME,
    root: async () =>
      (await Container.get(TestableEntityResourceImplementation).getMany()).result?.[0]?._id,
  },

  {
    data: () => TESTABLE_RELATED_RESOURCE_SEED_DATA,
    name: TESTABLE_RELATED_RESOURCE_RESOURCE_NAME,
    root: async () =>
      (await Container.get(TestableEntityResourceImplementation).getMany()).result?.[0]?._id,
  },
] satisfies Array<SeedDataModel<unknown>>;
