import { AccessImplementation } from '@lib/backend/auth/resources/Access/AccessImplementation/AccessImplementation';
import { Container } from '@lib/backend/core/utils/Container/Container';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Group } from '@lib/backend/group/resources/Group/Group';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '@lib/shared/group/resources/Group/Group.models';
import { type GroupImplementationModel } from '@lib/shared/group/resources/Group/GroupImplementation/GroupImplementation.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

@withContainer({ name: `${GROUP_RESOURCE_NAME}Implementation` })
export class GroupImplementation
  extends createEntityResourceImplementation<GroupModel, GroupFormModel>({
    Resource: Group,
    afterCreate: async ({ output }, context) => {
      const userId = context?.user?._id;
      if (userId) {
        const { create: accessCreate } = Container.get(AccessImplementation);
        output.result?._id &&
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
  implements GroupImplementationModel {}
