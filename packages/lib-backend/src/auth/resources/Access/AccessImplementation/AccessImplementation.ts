import { Access } from '@lib/backend/auth/resources/Access/Access';
import { createProtectedResoureImplementation } from '@lib/backend/auth/utils/createProtectedResourceImplementation/createProtectedResourceImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { RequestContextModel } from '@lib/config/platform/api/api.models';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '@lib/shared/auth/resources/Access/Access.models';
import { type AccessImplementationModel } from '@lib/shared/auth/resources/Access/AccessImplementation/AccessImplementation.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

@withContainer({ name: `${ACCESS_RESOURCE_NAME}Implementation` })
export class AccessImplementation
  extends createProtectedResoureImplementation<AccessModel, AccessFormModel>({
    Resource: Access,
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessImplementationModel
{
  async getManyUser(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel, AccessFormModel> = {},
    context?: RequestContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel>> {
    const userId = context?.user?._id;
    if (userId) {
      input.filter = [
        ...(input.filter ?? []),
        { field: USER_RESOURCE_NAME, value: { _id: userId } },
      ];
      return this.getMany(input, context);
    }
    throw new UnauthenticatedError();
  }
}
