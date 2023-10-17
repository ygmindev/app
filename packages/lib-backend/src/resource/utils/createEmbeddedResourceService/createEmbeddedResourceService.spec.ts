import { Container } from '#lib-backend/core/utils/Container/Container';
import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { TestableEmbeddedResourceService } from '#lib-backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceService/TestableEmbeddedResourceService';
import { testEmbeddedResourceService } from '#lib-backend/test/utils/testEmbeddedResourceService/testEmbeddedResourceService';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEmbeddedResourceService });

describe(displayName, () => {
  void testEmbeddedResourceService({
    getService: () => Container.get(TestableEmbeddedResourceService),
  });
});
