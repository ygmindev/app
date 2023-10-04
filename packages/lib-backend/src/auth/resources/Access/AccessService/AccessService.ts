import { Access } from '#lib-backend/auth/resources/Access/Access';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { UnauthenticatedError } from '#lib-shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { type AccessServiceModel } from '#lib-shared/auth/resources/Access/AccessService/AccessService.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

@withContainer({ name: `${ACCESS_RESOURCE_NAME}Service` })
export class AccessService
  extends createEntityResourceService<AccessModel, AccessFormModel>({
    Resource: Access,
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessServiceModel
{
  async getManyUser(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel, AccessFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel>> {
    const userId = context?.user?._id;
    if (userId) {
      input.filter = [...input.filter, { field: USER_RESOURCE_NAME, value: { _id: userId } }];
      return this.getMany(input, context);
    }
    throw new UnauthenticatedError();
  }
}
