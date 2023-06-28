import { Container } from '#lib-backend/core/utils/Container/Container';
import { EntityResourceService } from '#lib-backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { DummyEntityResourceService } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ EntityResourceService });

describe(displayName, () => {
  void testResourceService({ getService: () => Container.get(DummyEntityResourceService) });
});
