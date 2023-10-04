import { Access } from '#lib-backend/auth/resources/Access/Access';
import { type AccessResolverModel } from '#lib-backend/auth/resources/Access/AccessResolver/AccessResolver.models';
import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { withOutput } from '#lib-backend/resource/utils/withOutput/withOutput';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

@withContainer()
@withResolver({ Resource: Access })
export class AccessResolver
  extends createEntityResourceResolver<AccessModel, AccessFormModel>({
    Resource: Access,
    ResourceService: AccessService,
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessResolverModel
{
  @withOutput({
    Resource: Access,
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name: `${RESOURCE_METHOD_TYPE.GET_MANY}User`,
  })
  async getManyUser(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel, AccessFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel>> {
    return this.getManyUser(input, context);
  }
}
