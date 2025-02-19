import { Container } from '@lib/shared/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/backend/database/utils/seed/seed.constants';
import { type TestEmbeddedResourceImplementationParamsModel } from '@lib/backend/test/utils/testEmbeddedResourceImplementation/testEmbeddedResourceImplementation.models';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export const testEmbeddedResourceImplementation = async ({
  form,
  getImplementation,
}: TestEmbeddedResourceImplementationParamsModel): Promise<void> =>
  testResourceImplementation({
    before: async (implementation) => {
      if (implementation) {
        const { result } = await Container.get(Database, DATABASE_TYPE.MONGO)
          .getRepository<TestableEntityResourceModel>({
            name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
          })
          .create({ form: { stringField: 'stringField' } });

        if (result) {
          for (const form of TESTABLE_ENTITY_RESOURCE_SEED_DATA) {
            await implementation.create({ form, root: result._id });
          }
          implementation.decorators = { ...implementation.decorators, root: result._id };
        }
      }
    },
    form,
    getImplementation,
  });
