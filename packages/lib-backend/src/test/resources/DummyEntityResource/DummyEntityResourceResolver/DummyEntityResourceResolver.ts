import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { DummyEntityResource } from '@lib/backend/test/resources/DummyEntityResource/DummyEntityResource';
import { DummyEntityResourceService } from '@lib/backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import type { DummyEntityResourceServiceModel } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService.models';

@withContainer()
@withResolver({ Resource: DummyEntityResource })
export class DummyEntityResourceResolver
  extends EntityResourceResolver<DummyEntityResourceModel, DummyEntityResourceFormModel>({
    Resource: DummyEntityResource,
    ResourceService: DummyEntityResourceService,
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements DummyEntityResourceServiceModel {}
