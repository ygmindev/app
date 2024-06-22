import { AccessImplementation } from '@lib/backend/auth/resources/Access/AccessImplementation/AccessImplementation';
import {
  type CreateProtectedResoureImplementationModel,
  type CreateProtectedResoureImplementationParamsModel,
} from '@lib/backend/auth/utils/createProtectedResourceImplementation/createProtectedResourceImplementation.models';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { GroupImplementation } from '@lib/backend/group/resources/Group/GroupImplementation/GroupImplementation';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { UnauthenticatedError } from '@lib/shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type GroupImplementationModel } from '@lib/shared/group/resources/Group/GroupImplementation/GroupImplementation.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { ObjectId } from 'mongodb';

export const createProtectedResoureImplementation = <
  TType extends ProtectedResourceModel,
  TForm extends EntityResourceDataModel<TType> = EntityResourceDataModel<TType>,
>({
  ...params
}: CreateProtectedResoureImplementationParamsModel<
  TType,
  TForm
>): CreateProtectedResoureImplementationModel<TType, TForm> => {
  class ProtectedResourceImplementation extends createEntityResourceImplementation<TType, TForm>({
    ...params,
  }) {
    @withInject(GroupImplementation) protected _groupImplementation!: GroupImplementationModel;

    async getManyProtected(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm> = {},
      context?: RequestContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>> {
      const userId = context?.user?._id;
      if (userId) {
        const accessAll = (
          await Container.get(AccessImplementation).getMany({
            filter: [{ field: '_user', value: { _id: userId } }],
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
      if (self._group) {
        const { result } = await this._groupImplementation.get({
          filter: [{ field: '_id', value: self._group }],
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
