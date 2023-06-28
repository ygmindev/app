import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { EntityResourceResolver } from '#lib-backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { EntityResourceService } from '#lib-backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { DummyEntityResource } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResource';
import { DummyEntityResourceService } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ EntityResourceService });

describe(displayName, () => {
  @withContainer()
  class Resolver extends EntityResourceResolver<
    DummyEntityResourceModel,
    DummyEntityResourceFormModel
  >({
    Resource: DummyEntityResource,
    ResourceService: DummyEntityResourceService,
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  }) {}

  void testResourceService({ getService: () => Container.get(Resolver) });
});
