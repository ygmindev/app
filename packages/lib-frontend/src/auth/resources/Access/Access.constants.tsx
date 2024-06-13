import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';

export const ACCESS_RESOURCE_PARAMS = {
  fields: [{ id: '_id' }, { id: 'role' }, { id: 'User' }],
  name: ACCESS_RESOURCE_NAME,
} satisfies ResourceParamsModel<AccessModel>;
