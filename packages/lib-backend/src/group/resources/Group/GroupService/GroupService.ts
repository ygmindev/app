import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import {
  ACCESS_RESOURCE_NAME,
  ACCESS_ROLE,
} from '#lib-shared/auth/resources/Access/Access.constants';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/group/resources/Group/Group.models';
import { type GroupServiceModel } from '#lib-shared/group/resources/Group/GroupService/GroupService.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';

@withContainer({ name: `${GROUP_RESOURCE_NAME}Service` })
export class GroupService
  extends createEntityResourceService<GroupModel, GroupFormModel>({
    afterCreate: async ({ output }, context) => {
      const { get: userGet } = Container.get(UserService);
      const { create: accessCreate } = Container.get(AccessService);
      const { update: groupUpdate } = Container.get(GroupService);
      if (output.result && context?.user) {
        const user = (await userGet({ filter: [{ field: '_id', value: context.user._id }] }))
          .result;
        const access =
          user &&
          (
            await accessCreate({
              form: {
                [GROUP_RESOURCE_NAME]: output.result,
                [USER_RESOURCE_NAME]: user,
                role: [ACCESS_ROLE.ADMIN],
              },
            })
          ).result;
        access &&
          (await groupUpdate({
            filter: [{ field: '_id', value: output.result._id }],
            update: { [ACCESS_RESOURCE_NAME]: [access] },
          }));
      }
      return output;
    },
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupServiceModel {}
