import { Container } from '@lib/shared/core/utils/Container/Container';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { testResourceImplementation } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceImplementation });

describe(displayName, () => {
  @withContainer()
  class Resolver extends createEntityResourceResolver<
    TestableEntityResourceModel,
    TestableEntityResourceFormModel
  >({
    Resource: () => TestableEntityResource,
    ResourceImplementation: TestableEntityResourceImplementation,
    name: TESTABLE_ENTITY_RESOURCE_NAME,
  }) {}

  void testResourceImplementation({ getImplementation: () => Container.get(Resolver) });
});
