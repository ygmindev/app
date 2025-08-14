import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { Security } from '@lib/model/quant/Security/Security';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';
import { type SecurityImplementationModel } from '@lib/model/quant/Security/SecurityImplementation/SecurityImplementation.models';

@withContainer({ name: `${SECURITY_RESOURCE_NAME}Implementation` })
export class SecurityImplementation
  extends createEntityResourceImplementation<SecurityModel>({
    Resource: Security,
    name: SECURITY_RESOURCE_NAME,
  })
  implements SecurityImplementationModel {}
