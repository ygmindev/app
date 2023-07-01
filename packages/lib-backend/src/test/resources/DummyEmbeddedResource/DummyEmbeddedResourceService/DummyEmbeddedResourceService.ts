import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { DummyEntityResourceService } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import {
  type DummyEmbeddedResourceFormModel,
  type DummyEmbeddedResourceModel,
} from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import { type DummyEmbeddedResourceServiceModel } from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService.models';
import {
  type DummyEntityResourceFormModel,
  type DummyEntityResourceModel,
} from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

@withContainer({ name: `${DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME}Service` })
export class DummyEmbeddedResourceService
  extends createEmbeddedResourceService<
    DummyEmbeddedResourceModel,
    DummyEmbeddedResourceFormModel,
    DummyEntityResourceModel,
    DummyEntityResourceFormModel
  >({
    RootService: DummyEntityResourceService,
    name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME,
  })
  implements DummyEmbeddedResourceServiceModel {}
