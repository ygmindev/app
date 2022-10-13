import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import type { EntityResourceResolverModel } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { DummyEntityResource } from '@lib/backend/testing/resources/DummyEntityResource/DummyEntityResource';
import { DummyEntityResourceService } from '@lib/backend/testing/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

@withContainer()
@withResolver({ Resource: DummyEntityResource })
export class DummyEntityResourceResolver
  extends EntityResourceResolver<DummyEntityResourceModel, DummyEntityResourceFormModel>({
    Resource: DummyEntityResource,
    ResourceService: DummyEntityResourceService,
    createAccess: ACCESS_LEVEL.PUBLIC,
    getAccess: ACCESS_LEVEL.PUBLIC,
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    removeAccess: ACCESS_LEVEL.PUBLIC,
    updateAccess: ACCESS_LEVEL.PUBLIC,
  })
  implements EntityResourceResolverModel<DummyEntityResourceModel, DummyEntityResourceFormModel> {}
