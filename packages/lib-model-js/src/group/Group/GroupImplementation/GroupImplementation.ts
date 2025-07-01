import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { AccessImplementation } from '@lib/model/auth/Access/AccessImplementation/AccessImplementation';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { Group } from '@lib/model/group/Group/Group';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { type GroupImplementationModel } from '@lib/model/group/Group/GroupImplementation/GroupImplementation.models';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';

@withContainer({ name: `${GROUP_RESOURCE_NAME}Implementation` })
export class GroupImplementation
  extends createEntityResourceImplementation<GroupModel>({
    Resource: Group,
    afterCreate: async ({ output }, context) => {
      const userId = context?.user?._id;
      if (userId) {
        const { create: accessCreate } = Container.get(AccessImplementation);
        output.result?._id &&
          (await accessCreate({
            form: {
              [GROUP_RESOURCE_NAME]: { _id: output.result._id },
              [ROLE_RESOURCE_NAME]: [ACCESS_ROLE.ADMIN],
              [USER_RESOURCE_NAME]: { _id: userId },
            },
          }));
      }
      return output;
    },
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupImplementationModel {}
