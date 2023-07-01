import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { DummyEmbeddedResource } from '#lib-backend/test/resources/DummyEmbeddedResource/DummyEmbeddedResource';
import { DummyEmbeddedResourceService } from '#lib-backend/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import {
  type DummyEmbeddedResourceFormModel,
  type DummyEmbeddedResourceModel,
} from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import { type DummyEmbeddedResourceServiceModel } from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService.models';
import { type DummyEntityResourceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

@withContainer()
@withResolver({ Resource: DummyEmbeddedResource })
export class DummyEmbeddedResourceResolver
  extends createEmbeddedResourceResolver<
    DummyEmbeddedResourceModel,
    DummyEmbeddedResourceFormModel,
    DummyEntityResourceModel
  >({
    Resource: DummyEmbeddedResource,
    ResourceService: DummyEmbeddedResourceService,
    name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME,
  })
  implements DummyEmbeddedResourceServiceModel {}
