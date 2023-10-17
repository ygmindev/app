import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { TestableEmbeddedResource } from '#lib-backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableEntityResourceService } from '#lib-backend/test/resources/TestableEntityResource/TestableEntityResourceService/TestableEntityResourceService';
import { TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import {
  type TestableEmbeddedResourceFormModel,
  type TestableEmbeddedResourceModel,
} from '#lib-shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEmbeddedResourceServiceModel } from '#lib-shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceService/TestableEmbeddedResourceService.models';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';

@withContainer({ name: `${TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME}Service` })
export class TestableEmbeddedResourceService
  extends createEmbeddedResourceService<
    TestableEmbeddedResourceModel,
    TestableEmbeddedResourceFormModel,
    TestableEntityResourceModel,
    TestableEntityResourceFormModel
  >({
    Resource: TestableEmbeddedResource,
    RootService: TestableEntityResourceService,
    name: TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME,
  })
  implements TestableEmbeddedResourceServiceModel {}
