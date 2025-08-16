import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { Access } from '@lib/model/auth/Access/Access.entity';
import { ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { AccessImplementation } from '@lib/model/auth/Access/AccessImplementation/AccessImplementation';
import { type AccessResolverModel } from '@lib/model/auth/Access/AccessResolver/AccessResolver.models';

@withContainer()
@withResolver({ Resource: () => Access })
export class AccessResolver
  extends createProtectedResourceResolver<AccessModel>({
    Resource: () => Access,
    ResourceImplementation: AccessImplementation,
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessResolverModel {}
