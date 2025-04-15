import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { TESTABLE_ENTITY_RESOURCE_FIXTURE } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Database });

describe(displayName, () => {
  testResourceImplementation({
    form: TESTABLE_ENTITY_RESOURCE_FIXTURE,
    getImplementation: () =>
      Container.get(Database, DATABASE_TYPE.MONGO).getRepository<
        TestableEntityResourceModel,
        TestableEntityResourceFormModel
      >({ name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME }),
  });
});
