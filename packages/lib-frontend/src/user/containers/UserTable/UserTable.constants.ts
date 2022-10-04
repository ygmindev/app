import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_TABLE_PROPS: EntityResourceTablePropsModel<UserModel, UserFormModel> = {
  columns: [
    { field: '_id', name: ({ t }) => t('resource:labels.id') },
    { field: 'created', name: ({ t }) => t('resource:labels.created') },
  ],
  fields: [
    {
      result: [
        { edges: ['cursor', { node: ['_id', 'created'] }] },
        { pageInfo: ['endCursor', 'hasNextPage', 'hasPreviousPage', 'startCursor'] },
      ],
    },
  ],
  name: USER_RESOURCE_NAME,
};
