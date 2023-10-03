import { Container } from '#lib-backend/core/utils/Container/Container';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { DummyEntityResourceService } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { DUMMY_ENTITY_RESOURCE_FIXTURE } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.fixtures';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceService });

describe(displayName, () => {
  void testResourceService({
    form: DUMMY_ENTITY_RESOURCE_FIXTURE,
    getService: () => Container.get(DummyEntityResourceService),
  });
});
