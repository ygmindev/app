import { type SeedDataModel } from '@lib/backend/database/utils/seed/seed.models';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { USER_FIXTURES } from '@lib/model/user/User/User.fixtures';

export const SEED_DATA: Array<SeedDataModel<unknown>> = [
  {
    data: () => USER_FIXTURES,
    name: USER_RESOURCE_NAME,
  },

  // {
  //   afterCreate: async (output: ResourceOutputModel<RESOURCE_METHOD_TYPE.CREATE, ProductModel>) => {
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

  // {
  //   data: () => TESTABLE_EMBEDDED_RESOURCE_SEED_DATA,
  //   name: TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME,
  //   root: async () =>
  //     (await Container.get(TestableEntityResourceImplementation).getMany()).result?.[0]?._id,
  // },

  // {
  //   data: () => TESTABLE_RELATED_RESOURCE_SEED_DATA,
  //   name: TESTABLE_RELATED_RESOURCE_RESOURCE_NAME,
  //   root: async () =>
  //     (await Container.get(TestableEntityResourceImplementation).getMany()).result?.[0]?._id,
  // },
];
