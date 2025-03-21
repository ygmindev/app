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
import { type PartialModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type GroupImplementationModel } from '@lib/shared/group/resources/Group/GroupImplementation/GroupImplementation.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

export const createProtectedResoureImplementation = <
  TType extends ProtectedResourceModel,
  TForm extends EntityResourceDataModel<TType> = EntityResourceDataModel<TType>,
>({
  beforeCreate,
  isAuthored = true,
  ...params
}: CreateProtectedResoureImplementationParamsModel<
  TType,
  TForm
>): CreateProtectedResoureImplementationModel<TType, TForm> => {
  class ProtectedResourceImplementation extends createEntityResourceImplementation<TType, TForm>({
    ...params,
    beforeCreate: async ({ input }, context) => {
      if (isAuthored) {
        const uid = context?.user?._id;
        if (!uid) {
          throw new UnauthenticatedError();
        }
        // TODO: fix typing
        input?.form && (input.form[USER_RESOURCE_NAME] = uid);
      }
      return beforeCreate ? beforeCreate({ input }, context) : input;
    },
  }) {
    @withInject(GroupImplementation) protected _groupImplementation!: GroupImplementationModel;

    @withAccess({ access: ACCESS_LEVEL.PROTECTED })
    async getManyProtected(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm> = {},
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>> {
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

    async Group(self: TType): Promise<PartialModel<GroupModel> | null> {
      if (self[GROUP_RESOURCE_NAME]) {
        const { result } = await this._groupImplementation.get({
          filter: [{ field: '_id', value: self[GROUP_RESOURCE_NAME] }],
        });
        if (result) {
          return result;
        }
      }
      throw new NotFoundError('group');
    }
  }

  return ProtectedResourceImplementation;
};
