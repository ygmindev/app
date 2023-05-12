import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { DummyEntityResourceService } from '@lib/backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { testResourceService } from '@lib/backend/test/utils/testResourceService/testResourceService';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => EntityResourceService });

describe(displayName, () => {
  testResourceService({ getService: async () => Container.get(DummyEntityResourceService) });
});
