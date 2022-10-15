import { EmbeddedResourceService } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { DummyEmbeddedResourceService } from '@lib/backend/testing/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService';
import { testEmbeddedResourceService } from '@lib/backend/testing/utils/testEmbeddedResourceService/testEmbeddedResourceService';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => EmbeddedResourceService });

describe(displayName, () => {
  const service = Container.get(DummyEmbeddedResourceService);
  testEmbeddedResourceService({ service });
});
