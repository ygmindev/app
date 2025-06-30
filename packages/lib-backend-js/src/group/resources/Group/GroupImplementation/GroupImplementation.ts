import { AccessImplementation } from '@lib/backend/auth/resources/Access/AccessImplementation/AccessImplementation';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Group } from '@lib/backend/group/resources/Group/Group';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { ACCESS_ROLE_MORE } from '@lib/shared/auth/resources/Access/Access.constants';
import { ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type GroupImplementationModel } from '@lib/model/group/Group/GroupImplementation/GroupImplementation.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

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
              [GROUP_RESOURCE_NAME]: output.result._id,
              [ROLE_RESOURCE_NAME]: [ACCESS_ROLE_MORE.ADMIN],
              [USER_RESOURCE_NAME]: userId,
            },
          }));
      }
      return output;
    },
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupImplementationModel {}
