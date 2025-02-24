import { createProtectedResoureImplementation } from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { TestableProtectedResoureImplementation } from '@lib/backend/test/resources/TestableProtectedResoure/TestableProtectedResoureImplementation/TestableProtectedResoureImplementation';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createProtectedResoureImplementation });

describe(displayName, () => {
  void testResourceImplementation({
    getImplementation: () => Container.get(TestableProtectedResoureImplementation),
  });
});
