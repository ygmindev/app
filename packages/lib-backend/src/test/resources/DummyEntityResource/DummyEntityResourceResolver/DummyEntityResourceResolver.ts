import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { DummyEntityResource } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResource';
import { DummyEntityResourceService } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import {
  type DummyEntityResourceFormModel,
  type DummyEntityResourceModel,
} from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { type DummyEntityResourceServiceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService.models';

@withContainer()
@withResolver({ Resource: DummyEntityResource })
export class DummyEntityResourceResolver
  extends createEntityResourceResolver<DummyEntityResourceModel, DummyEntityResourceFormModel>({
    Resource: DummyEntityResource,
    ResourceService: DummyEntityResourceService,
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements DummyEntityResourceServiceModel {}
