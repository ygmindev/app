import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { ACCESS_LEVEL, ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { Access } from '@lib/model/auth/Access/Access.entity';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { type AccessImplementationModel } from '@lib/model/auth/Access/AccessImplementation/AccessImplementation.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
export class AccessImplementation
  extends createEntityResourceImplementation<AccessModel>({
    Resource: Access,
    name: ACCESS_RESOURCE_NAME,
  })
  implements AccessImplementationModel
{
  @withAccess({ access: ACCESS_LEVEL.PROTECTED })
  async getManyUser(
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel, undefined> = {},
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, AccessModel, undefined>> {
    const uid = context?.user?._id;
    if (uid) {
      input.filter = [
        ...(input.filter ?? []),
        { field: USER_RESOURCE_NAME, value: { _id: new ObjectId(uid) } },
      ];
      return this.getMany(input, context);
    }
    throw new UnauthenticatedError();
  }
}
