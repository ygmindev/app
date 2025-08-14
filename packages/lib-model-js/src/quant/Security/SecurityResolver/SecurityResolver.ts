import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { Security } from '@lib/model/quant/Security/Security';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';
import { SecurityImplementation } from '@lib/model/quant/Security/SecurityImplementation/SecurityImplementation';
import { type SecurityResolverModel } from '@lib/model/quant/Security/SecurityResolver/SecurityResolver.models';

@withContainer()
@withResolver({ Resource: () => Security })
export class SecurityResolver
  extends createEntityResourceResolver<SecurityModel>({
    Resource: () => Security,
    ResourceImplementation: SecurityImplementation,
    name: SECURITY_RESOURCE_NAME,
  })
  implements SecurityResolverModel {}
