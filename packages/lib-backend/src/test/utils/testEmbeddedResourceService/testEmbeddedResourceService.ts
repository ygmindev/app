import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { DUMMY_ENTITY_RESOURCE_SEED_DATA } from '#lib-backend/database/utils/seed/seed.constants';
import type {
  TestableEmbeddedResourceServiceModel,
  TestEmbeddedResourceServiceParamsModel,
} from '#lib-backend/test/utils/testEmbeddedResourceService/testEmbeddedResourceService.models';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import type { DummyEntityResourceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

export const testEmbeddedResourceService = async ({
  getService,
}: TestEmbeddedResourceServiceParamsModel): Promise<void> =>
  void testResourceService({
    before: async (service: TestableEmbeddedResourceServiceModel) => {
      if (service) {
        const { result } = await Container.get(Database, DATABASE_TYPE.MONGO)
          .getRepository<DummyEntityResourceModel>({ name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME })
          .create({ form: { stringProperty: 'stringProperty' } });

        if (result) {
          const root = { _id: result._id };
          for (const form of DUMMY_ENTITY_RESOURCE_SEED_DATA) {
            await service.create({ form, root });
          }
          service.decorators = { ...service.decorators, root };
        }
      }
    },
    getService,
  });
