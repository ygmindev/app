import { Container } from '@lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib-backend/database/database.constants';
import { Database } from '@lib-backend/database/utils/Database/Database';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib-backend/test/utils/seed/seed.constants';
import { type TestEmbeddedResourceServiceParamsModel } from '@lib-backend/test/utils/testEmbeddedResourceService/testEmbeddedResourceService.models';
import { testResourceService } from '@lib-backend/test/utils/testResourceService/testResourceService';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib-shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export const testEmbeddedResourceService = async ({
  form,
  getService,
}: TestEmbeddedResourceServiceParamsModel): Promise<void> =>
  testResourceService({
    before: async (service) => {
      if (service) {
        const { result } = await Container.get(Database, DATABASE_TYPE.MONGO)
          .getRepository<TestableEntityResourceModel>({
            name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
          })
          .create({ form: { stringField: 'stringField' } });

        if (result) {
          for (const form of TESTABLE_ENTITY_RESOURCE_SEED_DATA) {
            await service.create({ form, root: result._id });
          }
          service.decorators = { ...service.decorators, root: result._id };
        }
      }
    },
    form,
    getService,
  });
