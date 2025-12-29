import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { FIXTURES as TESTABLE_ENTITY_RESOURCE_FIXTURES } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Database });

describe(displayName, () => {
  const [form] = TESTABLE_ENTITY_RESOURCE_FIXTURES;
  testResourceImplementation({
    form,
    getImplementation: (name = TESTABLE_ENTITY_RESOURCE_NAME) =>
      Container.get(Database, DATABASE_TYPE.MONGO).getRepository({
        name,
      }),
  });
});
