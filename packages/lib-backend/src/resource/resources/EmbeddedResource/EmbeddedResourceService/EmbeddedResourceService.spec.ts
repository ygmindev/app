import { Container } from '@lib/backend/core/utils/Container/Container';
import { EmbeddedResourceService } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { DummyEmbeddedResourceService } from '@lib/backend/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService';
import { testEmbeddedResourceService } from '@lib/backend/test/utils/testEmbeddedResourceService/testEmbeddedResourceService';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ EmbeddedResourceService });

describe(displayName, () => {
  testEmbeddedResourceService({
    getService: async () => Container.get(DummyEmbeddedResourceService),
  });
});
