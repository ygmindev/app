import { EmbeddedResourceService } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { DummyEmbeddedResourceService } from '@lib/backend/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService';
import { testEmbeddedResourceService } from '@lib/backend/test/utils/testEmbeddedResourceService/testEmbeddedResourceService';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => EmbeddedResourceService });

describe(displayName, () => {
  const service = Container.get(DummyEmbeddedResourceService);
  testEmbeddedResourceService({ service });
});
