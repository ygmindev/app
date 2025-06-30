import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceImplementation });

describe(displayName, () => {
  void testResourceImplementation({
    form: TESTABLE_ENTITY_RESOURCE_SEED_DATA[0],
    getImplementation: () => Container.get(TestableEntityResourceImplementation),
  });
});
