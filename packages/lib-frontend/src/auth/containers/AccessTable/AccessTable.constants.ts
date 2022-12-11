import { FORM_FIELD_TYPE } from '@lib/frontend/form/containers/FormContainer/FormContainer.constants';
import { validateLength } from '@lib/frontend/form/utils/validateLength/validateLength';
import { validateNotEmpty } from '@lib/frontend/form/utils/validateNotEmpty/validateNotEmpty';
import { ENTITY_RESOURCE_COLUMNS } from '@lib/frontend/resource/containers/Resources/Resources.constants';
import type { ResourcesPropsModel } from '@lib/frontend/resource/containers/Resources/Resources.models';
import {
  ACCESS_RESOURCE_NAME,
  ACCESS_ROLE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import type { AccessFormModel, AccessModel } from '@lib/shared/auth/resources/Access/Access.models';

export const ACCESS_TABLE_PROPS: ResourcesPropsModel<AccessModel, AccessFormModel> = {
  columns: [
    ...ENTITY_RESOURCE_COLUMNS.map((column) => ({ ...column, isHidden: true })),
    { field: FORM_FIELD_TYPE.TEXT_FIELD, id: '_uid', label: 'UID' },
    {
      field: FORM_FIELD_TYPE.SELECT_FIELD,
      id: 'role',
      label: ({ t }) => t('auth:labels.role'),
      options: Object.values(ACCESS_ROLE).map((value) => ({ id: value, label: value })),
    },
  ],

  fields: [{ result: ['_id', 'created', '_uid', 'role', { user: ['email'] }] }],

  name: ACCESS_RESOURCE_NAME,

  validators: { _uid: validateLength(24), role: validateNotEmpty() },
};
