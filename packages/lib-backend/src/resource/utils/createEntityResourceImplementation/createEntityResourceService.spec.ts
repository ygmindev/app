import { Container } from '@lib/backend/core/utils/Container/Container';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { TestableEntityResourceImplementation } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_FIXTURE } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceImplementation });

describe(displayName, () => {
  void testResourceImplementation({
    form: TESTABLE_ENTITY_RESOURCE_FIXTURE,
    getImplementation: () => Container.get(TestableEntityResourceImplementation),
  });
});
