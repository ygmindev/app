import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { TestableEmbeddedResource } from '#lib-backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableEmbeddedResourceService } from '#lib-backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceService/TestableEmbeddedResourceService';
import { TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import {
  type TestableEmbeddedResourceFormModel,
  type TestableEmbeddedResourceModel,
} from '#lib-shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEmbeddedResourceServiceModel } from '#lib-shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceService/TestableEmbeddedResourceService.models';
import { type TestableEntityResourceModel } from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';

@withContainer()
@withResolver({ Resource: () => TestableEmbeddedResource })
export class TestableEmbeddedResourceResolver
  extends createEmbeddedResourceResolver<
    TestableEmbeddedResourceModel,
    TestableEmbeddedResourceFormModel,
    TestableEntityResourceModel
  >({
    Resource: () => TestableEmbeddedResource,
    ResourceService: TestableEmbeddedResourceService,
    name: TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME,
  })
  implements TestableEmbeddedResourceServiceModel {}
