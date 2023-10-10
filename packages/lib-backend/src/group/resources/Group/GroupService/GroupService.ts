import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Group } from '#lib-backend/group/resources/Group/Group';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/group/resources/Group/Group.models';
import { type GroupServiceModel } from '#lib-shared/group/resources/Group/GroupService/GroupService.models';

@withContainer({ name: `${GROUP_RESOURCE_NAME}Service` })
export class GroupService
  extends createEntityResourceService<GroupModel, GroupFormModel>({
    Resource: Group,
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupServiceModel {}

// import { AccessService } from '#lib-backend/auth/resources/Access/AccessService/AccessService';
// import { Container } from '#lib-backend/core/utils/Container/Container';
// import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
// import { Group } from '#lib-backend/group/resources/Group/Group';
// import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
// import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
// import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
// import {
//   type GroupFormModel,
//   type GroupModel,
// } from '#lib-shared/group/resources/Group/Group.models';
// import { type GroupServiceModel } from '#lib-shared/group/resources/Group/GroupService/GroupService.models';

// @withContainer({ name: `${GROUP_RESOURCE_NAME}Service` })
// export class GroupService
//   extends createEntityResourceService<GroupModel, GroupFormModel>({
//     Resource: Group,
//     afterCreate: async ({ output }, context) => {
//       const userId = context?.user?._id;
//       if (userId) {
//         const { get: userGet } = Container.get(UserService);
//         const { create: accessCreate } = Container.get(AccessService);
//         const { update: groupUpdate } = Container.get(GroupService);
//         if (output.result) {
//           const user = (await userGet({ filter: [{ field: '_id', value: userId }] })).result;
//           console.warn('@@@before:');
//           // const access =
//           //   user &&
//           //   (
//           //     await accessCreate({
//           //       form: {
//           //         [GROUP_RESOURCE_NAME]: output.result._id as unknown as GroupModel,
//           //         [USER_RESOURCE_NAME]: new ObjectId(userId) as unknown as UserModel,
//           //         role: [ACCESS_ROLE.ADMIN],
//           //       },
//           //     })
//           //   ).result;
//           // access &&
//           //   (await groupUpdate({
//           //     filter: [{ field: '_id', value: output.result._id }],
//           //     update: { [ACCESS_RESOURCE_NAME]: [access] },
//           //   }));
//         }
//       }
//       return output;
//     },
//     beforeCreate: async ({ input }, context) => {
//       return input;
//     },
//     name: GROUP_RESOURCE_NAME,
//   })
//   implements GroupServiceModel {}
