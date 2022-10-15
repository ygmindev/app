import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { DummyEntityResourceService } from '@lib/backend/testing/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { testResourceService } from '@lib/backend/testing/utils/testResourceService/testResourceService';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => EntityResourceService });

describe(displayName, () => {
  const service = Container.get(DummyEntityResourceService);
  testResourceService({ service });
});
