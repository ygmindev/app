import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { TestableEmbeddedResourceImplementation } from '@lib/backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation';
import { testEmbeddedResourceImplementation } from '@lib/backend/test/utils/testEmbeddedResourceImplementation/testEmbeddedResourceImplementation';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { TESTABLE_EMBEDDED_RESOURCE_FIXTURE } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEmbeddedResourceImplementation });

describe(displayName, () => {
  void testEmbeddedResourceImplementation({
    form: TESTABLE_EMBEDDED_RESOURCE_FIXTURE,
    getImplementation: () => Container.get(TestableEmbeddedResourceImplementation),
  });
});
