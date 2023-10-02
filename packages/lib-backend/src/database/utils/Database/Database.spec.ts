import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { DUMMY_ENTITY_RESOURCE_FIXTURE } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.fixtures';
import {
  type DummyEntityResourceFormModel,
  type DummyEntityResourceModel,
} from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Database });

describe(displayName, () => {
  testResourceService<DummyEntityResourceModel>({
    form: DUMMY_ENTITY_RESOURCE_FIXTURE,
    getService: () =>
      Container.get(Database, DATABASE_TYPE.MONGO).getRepository<
        DummyEntityResourceModel,
        DummyEntityResourceFormModel
      >({ name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME }),
  });
});
