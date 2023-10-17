import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { TestableEntityResource } from '#lib-backend/test/resources/TestableEntityResource/TestableEntityResource';
import { TestableEntityResourceService } from '#lib-backend/test/resources/TestableEntityResource/TestableEntityResourceService/TestableEntityResourceService';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceServiceModel } from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResourceService/TestableEntityResourceService.models';

@withContainer()
@withResolver({ Resource: TestableEntityResource })
export class TestableEntityResourceResolver
  extends createEntityResourceResolver<
    TestableEntityResourceModel,
    TestableEntityResourceFormModel
  >({
    Resource: TestableEntityResource,
    ResourceService: TestableEntityResourceService,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements TestableEntityResourceServiceModel {}
