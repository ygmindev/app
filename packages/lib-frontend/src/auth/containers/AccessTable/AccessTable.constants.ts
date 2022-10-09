import { ENTITY_RESOURCE_COLUMNS } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.constants';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import {
  ACCESS_RESOURCE_NAME,
  ACCESS_ROLE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import type { AccessFormModel, AccessModel } from '@lib/shared/auth/resources/Access/Access.models';

export const ACCESS_TABLE_PROPS: EntityResourceTablePropsModel<AccessModel, AccessFormModel> = {
  columns: [
    ...ENTITY_RESOURCE_COLUMNS.map((column) => ({ ...column, isHidden: true })),
    { id: '_uid', label: 'UID' },
    {
      id: 'role',
      label: ({ t }) => t('auth:labels.role'),
      options: Object.values(ACCESS_ROLE).map((value) => ({ id: value, label: value })),
    },
  ],
  fields: [
    {
      result: [
        { edges: ['cursor', { node: ['_id', 'created', '_uid', 'role'] }] },
        { pageInfo: ['endCursor', 'hasNextPage', 'hasPreviousPage', 'startCursor'] },
      ],
    },
  ],

  name: ACCESS_RESOURCE_NAME,
};
