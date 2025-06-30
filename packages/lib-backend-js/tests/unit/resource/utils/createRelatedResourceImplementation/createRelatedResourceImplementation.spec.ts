import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { TestableRelatedResourceImplementation } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { testRelatedResourceImplementation } from '@lib/backend/test/utils/testRelatedResourceImplementation/testRelatedResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { TESTABLE_RELATED_RESOURCE_SEED_DATA } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createRelatedResourceImplementation });

describe(displayName, () => {
  void testRelatedResourceImplementation({
    form: TESTABLE_RELATED_RESOURCE_SEED_DATA[0],
    getImplementation: () => Container.get(TestableRelatedResourceImplementation),
  });
});
