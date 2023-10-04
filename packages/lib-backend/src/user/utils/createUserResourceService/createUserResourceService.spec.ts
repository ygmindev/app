import { Container } from '#lib-backend/core/utils/Container/Container';
import { createUserResourceService } from '#lib-backend/resource/utils/createUserResourceService/createUserResourceService';
import { DummyUserResourceService } from '#lib-backend/test/resources/DummyUserResource/DummyUserResourceService/DummyUserResourceService';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { DUMMY_ENTITY_RESOURCE_FIXTURE } from '#lib-shared/test/resources/DummyUserResource/DummyUserResource.fixtures';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createUserResourceService });

describe(displayName, () => {
  void testResourceService({
    form: DUMMY_ENTITY_RESOURCE_FIXTURE,
    getService: () => Container.get(DummyUserResourceService),
  });
});
