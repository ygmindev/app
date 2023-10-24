import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import {
  type CreateProtectedResoureServiceModel,
  type CreateProtectedResoureServiceParamsModel,
} from '#lib-backend/auth/utils/createProtectedResourceService/createProtectedResourceService.models';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { GroupService } from '#lib-backend/group/resources/Group/GroupService/GroupService';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { UnauthenticatedError } from '#lib-shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { type ProtectedResourceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { NotFoundError } from '#lib-shared/core/errors/NotFoundError/NotFoundError';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { type GroupModel } from '#lib-shared/group/resources/Group/Group.models';
import { type GroupServiceModel } from '#lib-shared/group/resources/Group/GroupService/GroupService.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

export const createProtectedResoureService = <
  TType extends ProtectedResourceModel,
  TForm extends EntityResourceDataModel<TType> = EntityResourceDataModel<TType>,
>({
  ...params
}: CreateProtectedResoureServiceParamsModel<TType, TForm>): CreateProtectedResoureServiceModel<
  TType,
  TForm
> => {
  class ProtectedResourceService extends createEntityResourceService<TType, TForm>({
    ...params,
  }) {
    @withInject(GroupService) protected _groupService!: GroupServiceModel;

    async getManyProtected(
      input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm>,
      context?: ContextModel,
    ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType>> {
      const userId = context?.user?._id;
      if (userId) {
        const accessAll = (
          await Container.get(AccessService).getMany({
            filter: [{ field: USER_RESOURCE_NAME, value: { _id: userId } }],
          })
        ).result;
        if (accessAll) {
          input.filter = [
            ...input.filter,
            {
              condition: FILTER_CONDITION.IN,
              field: '_id',
              value: accessAll.map(({ Group }) => Group),
            },
          ];
          return this.getMany(input, context);
        }
        return { result: [] };
      }
      throw new UnauthenticatedError();
    }

    async Group(self: TType): Promise<PartialModel<GroupModel> | null> {
      if (self.Group) {
        const { result } = await this._groupService.get({
          filter: [{ field: '_id', value: self.Group }],
        });
        if (result) {
          return result;
        }
      }
      throw new NotFoundError('group');
    }
  }
  return ProtectedResourceService;
};
