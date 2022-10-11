import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import type { GraphQlFieldModel } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import { ENTITY_RESOURCE_COLUMNS } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.constants';
import type { EntityResourceTablePropsModel } from '@lib/frontend/resource/components/EntityResourceTable/EntityResourceTable.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel, UserModel } from '@lib/shared/user/resources/User/User.models';

const USER_FIELDS: Array<GraphQlFieldModel<UserModel>> = [
  '_id',
  'created',
  'first',
  'last',
  'email',
];

export const USER_TABLE_PROPS: EntityResourceTablePropsModel<UserModel, UserFormModel> = {
  columns: [
    ...ENTITY_RESOURCE_COLUMNS.map((column) => ({ ...column, isHidden: true })),
    { field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'first', label: ({ t }) => t('user:labels.first') },
    { field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'last', label: ({ t }) => t('user:labels.last') },
    { field: FORM_FIELD_TYPE.TEXT_FIELD, id: 'email', label: ({ t }) => t('user:labels.email') },
  ],
  createFields: [{ result: USER_FIELDS }],
  getConnectionFields: [
    {
      result: [
        { edges: ['cursor', { node: USER_FIELDS }] },
        { pageInfo: ['endCursor', 'hasNextPage', 'hasPreviousPage', 'startCursor'] },
      ],
    },
  ],

  name: USER_RESOURCE_NAME,
};
