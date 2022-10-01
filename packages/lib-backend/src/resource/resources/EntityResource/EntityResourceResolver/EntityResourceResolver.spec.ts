import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { DummyEntityResource } from '@lib/backend/testing/resources/DummyEntityResource/DummyEntityResource';
import { DummyEntityResourceService } from '@lib/backend/testing/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { testResourceService } from '@lib/backend/testing/utils/testResourceService/testResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => EntityResourceService });

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

  const service = Container.get(Resolver);

  testResourceService({ service });
});
