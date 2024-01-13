import { Container } from '@lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib-backend/database/database.constants';
import { Database } from '@lib-backend/database/utils/Database/Database';
import { testResourceService } from '@lib-backend/test/utils/testResourceService/testResourceService';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib-shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { TESTABLE_ENTITY_RESOURCE_FIXTURE } from '@lib-shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { withTest } from '@lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Database });

describe(displayName, () => {
  testResourceService<TestableEntityResourceModel>({
    form: TESTABLE_ENTITY_RESOURCE_FIXTURE,
    getService: () =>
      Container.get(Database, DATABASE_TYPE.MONGO).getRepository<
        TestableEntityResourceModel,
        TestableEntityResourceFormModel
      >({ name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME }),
  });
});
