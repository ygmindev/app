import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { DummyEntityResource } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResource';
import { DummyEntityResourceService } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import {
  type DummyEntityResourceFormModel,
  type DummyEntityResourceModel,
} from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceService });

describe(displayName, () => {
  @withContainer()
  class Resolver extends createEntityResourceResolver<
    DummyEntityResourceModel,
    DummyEntityResourceFormModel
  >({
    Resource: DummyEntityResource,
    ResourceService: DummyEntityResourceService,
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  }) {}

  void testResourceService({ getService: () => Container.get(Resolver) });
});
