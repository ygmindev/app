import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import {
  type CreateProtectedResoureImplementationModel,
  type CreateProtectedResoureImplementationParamsModel,
} from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation.models';
import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { AccessImplementation } from '@lib/model/auth/Access/AccessImplementation/AccessImplementation';
import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { GroupImplementation } from '@lib/model/group/Group/GroupImplementation/GroupImplementation';
import { type GroupImplementationModel } from '@lib/model/group/Group/GroupImplementation/GroupImplementation.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const createProtectedResoureImplementation = <TType extends ProtectedResourceModel>({
  beforeCreate,
  isAuthored = true,
  ...params
}: CreateProtectedResoureImplementationParamsModel<TType>): CreateProtectedResoureImplementationModel<TType> => {
  class ProtectedResourceImplementation extends createEntityResourceImplementation<TType>({
    ...params,
    beforeCreate: async ({ input }, context) => {
      if (isAuthored) {
        const uid = context?.user?._id;
        if (!uid) {
          throw new UnauthenticatedError();
        }
        input?.form && (input.form.createdBy = { _id: uid });
      }
      return beforeCreate ? beforeCreate({ input }, context) : input;
    },
  }) {
    @withInject(GroupImplementation) protected _groupImplementation!: GroupImplementationModel;

    @withAccess({ access: ACCESS_LEVEL.PROTECTED })
    async getManyProtected(
      input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType> = {},
      context?: RequestContextModel,
    ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>> {
      const uid = context?.user?._id;
      if (uid) {
        const accessAll = (
          await Container.get(AccessImplementation).getMany({
            filter: [{ field: '_user', value: { _id: uid } }],
          })
        ).result;
        if (accessAll) {
          input.filter = filterNil([
            ...(input.filter ?? []),
            context.group && { field: GROUP_RESOURCE_NAME, value: new ObjectId(context.group) },
          ]);
          return this.getMany(input, context);
        }
        return { result: [] };
      }
      throw new UnauthenticatedError();
    }

    // async Group(self: TType): Promise<PartialModel<GroupModel> | null> {
    //   if (self[GROUP_RESOURCE_NAME]) {
    //     const { result } = await this._groupImplementation.get({
    //       filter: [{ field: '_id', value: self[GROUP_RESOURCE_NAME] }],
    //     });
    //     if (result) {
    //       return result;
    //     }
    //   }
    //   throw new NotFoundError('group');
    // }
  }

  return ProtectedResourceImplementation;
};
