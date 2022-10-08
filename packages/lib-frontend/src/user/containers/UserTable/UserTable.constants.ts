import { ENTITY_RESOURCE_COLUMNS } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.constants';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_TABLE_PROPS: EntityResourceTablePropsModel<UserModel, UserFormModel> = {
  columns: [
    ...ENTITY_RESOURCE_COLUMNS,
    { id: 'first', label: ({ t }) => t('user:labels.first') },
    { id: 'last', label: ({ t }) => t('user:labels.last') },
    { id: 'email', label: ({ t }) => t('user:labels.email') },
  ],
  fields: [
    {
      result: [
        { edges: ['cursor', { node: ['_id', 'created', 'first', 'last', 'email'] }] },
        { pageInfo: ['endCursor', 'hasNextPage', 'hasPreviousPage', 'startCursor'] },
      ],
    },
  ],
  name: USER_RESOURCE_NAME,
};
