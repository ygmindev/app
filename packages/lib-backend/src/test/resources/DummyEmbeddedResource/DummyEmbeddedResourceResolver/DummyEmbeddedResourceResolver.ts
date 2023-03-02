import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EmbeddedResourceResolver } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver';
import { DummyEmbeddedResource } from '@lib/backend/test/resources/DummyEmbeddedResource/DummyEmbeddedResource';
import { DummyEmbeddedResourceService } from '@lib/backend/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import type {
  DummyEmbeddedResourceFormModel,
  DummyEmbeddedResourceModel,
} from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import type { DummyEmbeddedResourceServiceModel } from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService.models';
import type { DummyEntityResourceModel } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';

@withContainer()
@withResolver({ Resource: DummyEmbeddedResource })
export class DummyEmbeddedResourceResolver
  extends EmbeddedResourceResolver<
    DummyEmbeddedResourceModel,
    DummyEmbeddedResourceFormModel,
    DummyEntityResourceModel
  >({
    Resource: DummyEmbeddedResource,
    ResourceService: DummyEmbeddedResourceService,
    name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME,
  })
  implements DummyEmbeddedResourceServiceModel {}
