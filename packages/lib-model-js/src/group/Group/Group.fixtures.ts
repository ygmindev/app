import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const GROUP_FIXTURES: Array<GroupModel> = getEntityResourceFixture({
  count: 3,

  data: () => ({
    logo: 'logo',

    name: 'group',

    types: [],
  }),
});
