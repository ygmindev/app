import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Group } from '#lib-backend/group/resources/Group/Group';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { UnauthenticatedError } from '#lib-shared/auth/errors/UnauthenticatedError/UnauthenticatedError';
import { ACCESS_ROLE } from '#lib-shared/auth/resources/Access/Access.constants';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/group/resources/Group/Group.models';
import { type GroupServiceModel } from '#lib-shared/group/resources/Group/GroupService/GroupService.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';
import { FILTER_CONDITION } from '#lib-shared/resource/utils/Filter/Filter.constants';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

@withContainer({ name: `${GROUP_RESOURCE_NAME}Service` })
export class GroupService
  extends createEntityResourceService<GroupModel, GroupFormModel>({
    Resource: Group,
    afterCreate: async ({ output }, context) => {
      const userId = context?.user?._id;
      if (userId) {
        const { create: accessCreate } = Container.get(AccessService);
        output.result &&
          (await accessCreate({
            form: {
              [GROUP_RESOURCE_NAME]: { _id: output.result._id },
              [USER_RESOURCE_NAME]: { _id: userId },
              role: [ACCESS_ROLE.ADMIN],
            },
          }));
      }
      return output;
    },
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupServiceModel
{
  @withInject(AccessService) protected accessService!: AccessService;

  async getManyUser(
    input: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, GroupModel, GroupFormModel>,
    context?: ContextModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, GroupModel>> {
    const userId = context?.user?._id;
    if (userId) {
      const accessAll = (
        await this.accessService.getMany({
          filter: [{ field: USER_RESOURCE_NAME, value: { _id: userId } }],
        })
      ).result;
      if (accessAll) {
        input.filter = [
          ...input.filter,
          { condition: FILTER_CONDITION.IN, field: '_id', value: accessAll.map(({ _id }) => _id) },
        ];
        return this.getMany(input, context);
      }
      return { result: [] };
    }
    throw new UnauthenticatedError();
  }
}
