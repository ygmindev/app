import { EmbeddedResourceService } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService';
import { DummyEntityResourceService } from '@lib/backend/testing/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import type {
  DummyEmbeddedResourceFormModel,
  DummyEmbeddedResourceModel,
} from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import type { DummyEmbeddedResourceServiceModel } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService.models';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

@withContainer({ name: `${DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME}Service` })
export class DummyEmbeddedResourceService
  extends EmbeddedResourceService<
    DummyEmbeddedResourceModel,
    DummyEmbeddedResourceFormModel,
    DummyEntityResourceModel,
    DummyEntityResourceFormModel
  >({
    RootService: DummyEntityResourceService,
    name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME,
  })
  implements DummyEmbeddedResourceServiceModel {}
