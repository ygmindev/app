import { AccessImplementation } from '@lib/backend/auth/resources/Access/AccessImplementation/AccessImplementation';
import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { GroupImplementation } from '@lib/backend/group/resources/Group/GroupImplementation/GroupImplementation';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import {
  type CreateProtectedResoureImplementationModel,
  type CreateProtectedResoureImplementationParamsModel,
} from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation.models';
import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupImplementationModel } from '@lib/shared/group/resources/Group/GroupImplementation/GroupImplementation.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

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
        input?.form && (input.form.createdBy = uid);
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
