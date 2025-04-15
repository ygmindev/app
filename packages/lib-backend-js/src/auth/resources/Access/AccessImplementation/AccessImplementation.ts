import { Access } from '@lib/backend/auth/resources/Access/Access';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createProtectedResoureImplementation } from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation';
import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import {
  ACCESS_LEVEL,
  ACCESS_RESOURCE_NAME,
} from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { type AccessImplementationModel } from '@lib/shared/auth/resources/Access/AccessImplementation/AccessImplementation.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

@withContainer({ name: `${ACCESS_RESOURCE_NAME}Implementation` })
export class AccessImplementation
  extends createProtectedResoureImplementation<AccessModel>({
    Resource: Access,
    isAuthored: false,
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessImplementationModel
{
  @withAccess({ access: ACCESS_LEVEL.PROTECTED })
  async getManyUser(
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel, undefined> = {},
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel, undefined>> {
    const userId = context?.user?._id;
    if (userId) {
      input.filter = [...(input.filter ?? []), { field: '_user', value: { _id: userId } }];
      return this.getMany(input, context);
    }
    throw new UnauthenticatedError();
  }
}
