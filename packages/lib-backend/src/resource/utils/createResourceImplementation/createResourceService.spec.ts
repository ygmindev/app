import { Container } from '@lib/backend/core/utils/Container/Container';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { TestableEmbeddedResourceImplementation } from '@lib/backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation';
import { testEmbeddedResourceImplementation } from '@lib/backend/test/utils/testEmbeddedResourceImplementation/testEmbeddedResourceImplementation';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createResourceImplementation });

describe(displayName, () => {
  void testEmbeddedResourceImplementation({
    getImplementation: () => Container.get(TestableEmbeddedResourceImplementation),
  });
});
