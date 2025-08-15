import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
// import { TESTABLE_RELATED_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.constants';
// import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Database });

describe(displayName, () => {
  testResourceImplementation({
    form: TESTABLE_ENTITY_RESOURCE_SEED_DATA[0],
    getImplementation: () =>
      Container.get(Database, DATABASE_TYPE.MONGO).getRepository<TestableEntityResourceModel>({
        name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
      }),
  });

  test('works with related resource', async () => {
    // const repository = Container.get(
    //   Database,
    //   DATABASE_TYPE.MONGO,
    // ).getRepository<TestableRelatedResourceModel>({
    //   name: TESTABLE_RELATED_RESOURCE_RESOURCE_NAME,
    // });
  });
});
