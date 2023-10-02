import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { DummyUserResource } from '#lib-backend/test/resources/DummyUserResource/DummyUserResource';
import { DummyUserResourceService } from '#lib-backend/test/resources/DummyUserResource/DummyUserResourceService/DummyUserResourceService';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyUserResource/DummyUserResource.constants';
import {
  type DummyUserResourceFormModel,
  type DummyUserResourceModel,
} from '#lib-shared/test/resources/DummyUserResource/DummyUserResource.models';
import { type DummyUserResourceServiceModel } from '#lib-shared/test/resources/DummyUserResource/DummyUserResourceService/DummyUserResourceService.models';

@withContainer()
@withResolver({ Resource: DummyUserResource })
export class DummyUserResourceResolver
  extends createEntityResourceResolver<DummyUserResourceModel, DummyUserResourceFormModel>({
    Resource: DummyUserResource,
    ResourceService: DummyUserResourceService,
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements DummyUserResourceServiceModel {}
