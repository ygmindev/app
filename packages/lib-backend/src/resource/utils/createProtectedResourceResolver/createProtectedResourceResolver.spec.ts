import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { TestableEntityResource } from '#lib-backend/test/resources/TestableEntityResource/TestableEntityResource';
import { TestableEntityResourceService } from '#lib-backend/test/resources/TestableEntityResource/TestableEntityResourceService/TestableEntityResourceService';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceService });

describe(displayName, () => {
  @withContainer()
  class Resolver extends createEntityResourceResolver<
    TestableEntityResourceModel,
    TestableEntityResourceFormModel
  >({
    Resource: TestableEntityResource,
    ResourceService: TestableEntityResourceService,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  }) {}

  void testResourceService({ getService: () => Container.get(Resolver) });
});
