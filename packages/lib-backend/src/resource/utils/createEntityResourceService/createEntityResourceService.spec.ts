import { Container } from '@lib/backend/core/utils/Container/Container';
import { createEntityResourceService } from '@lib/backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { TestableEntityResourceService } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResourceService/TestableEntityResourceService';
import { testResourceService } from '@lib/backend/test/utils/testResourceService/testResourceService';
import { TESTABLE_ENTITY_RESOURCE_FIXTURE } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceService });

describe(displayName, () => {
  void testResourceService({
    form: TESTABLE_ENTITY_RESOURCE_FIXTURE,
    getService: () => Container.get(TestableEntityResourceService),
  });
});
