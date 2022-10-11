import { Access } from '@lib/backend/auth/resources/Access/Access';
import { AccessService } from '@lib/backend/auth/resources/Access/AccessService/AccessService';
import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import type { EntityResourceResolverModel } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import {
  ACCESS_LEVEL,
  ACCESS_RESOURCE_NAME,
} from '@lib/shared/auth/resources/Access/Access.constants';
import type { AccessFormModel, AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';

@withContainer()
@withResolver()
export class AccessResolver
  extends EntityResourceResolver<AccessModel, AccessFormModel>({
    Resource: Access,
    ResourceService: AccessService,
    createAccess: ACCESS_LEVEL.PUBLIC,
    getAccess: ACCESS_LEVEL.PUBLIC,
    name: ACCESS_RESOURCE_NAME,
  })
  implements EntityResourceResolverModel<AccessModel, AccessFormModel> {}
