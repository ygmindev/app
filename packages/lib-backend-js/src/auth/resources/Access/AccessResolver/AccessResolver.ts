import { Access } from '@lib/backend/auth/resources/Access/Access';
import { AccessImplementation } from '@lib/backend/auth/resources/Access/AccessImplementation/AccessImplementation';
import { type AccessResolverModel } from '@lib/backend/auth/resources/Access/AccessResolver/AccessResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';

@withContainer()
@withResolver({ Resource: () => Access })
export class AccessResolver
  extends createProtectedResourceResolver<AccessModel>({
    Resource: () => Access,
    ResourceImplementation: AccessImplementation,
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessResolverModel {}
