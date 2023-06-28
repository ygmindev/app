import { Container } from '#lib-backend/core/utils/Container/Container';
import { EmbeddedResourceService } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { DummyEmbeddedResourceService } from '#lib-backend/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService';
import { testEmbeddedResourceService } from '#lib-backend/test/utils/testEmbeddedResourceService/testEmbeddedResourceService';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ EmbeddedResourceService });

describe(displayName, () => {
  void testEmbeddedResourceService({
    getService: () => Container.get(DummyEmbeddedResourceService),
  });
});
