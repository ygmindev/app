import { Access } from '#lib-backend/auth/resources/Access/Access';
import { type AccessResolverModel } from '#lib-backend/auth/resources/Access/AccessResolver/AccessResolver.models';
import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withContext } from '#lib-backend/http/utils/withContext/withContext';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { withInput } from '#lib-backend/resource/utils/withInput/withInput';
import { withOutput } from '#lib-backend/resource/utils/withOutput/withOutput';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
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
  @withInject(AccessService) protected accessService!: AccessService;

  @withOutput({
    Resource: Access,
    method: RESOURCE_METHOD_TYPE.GET_MANY,
    name: `${ACCESS_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.GET_MANY}User`,
  })
  async getManyUser(
    @withInput({
      Resource: Access,
      method: RESOURCE_METHOD_TYPE.GET_MANY,
      name: `${ACCESS_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.GET_MANY}User`,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel, AccessFormModel>,
    @withContext()
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel>> {
    return this.accessService.getManyUser(input, context);
  }
}
