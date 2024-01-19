import { Container } from '@lib/backend/core/utils/Container/Container';
import { createEmbeddedResourceService } from '@lib/backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { TestableEmbeddedResourceService } from '@lib/backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceService/TestableEmbeddedResourceService';
import { testEmbeddedResourceService } from '@lib/backend/test/utils/testEmbeddedResourceService/testEmbeddedResourceService';
import { TESTABLE_EMBEDDED_RESOURCE_FIXTURE } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.fixtures';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEmbeddedResourceService });

describe(displayName, () => {
  void testEmbeddedResourceService({
    form: TESTABLE_EMBEDDED_RESOURCE_FIXTURE,
    getService: () => Container.get(TestableEmbeddedResourceService),
  });
});
