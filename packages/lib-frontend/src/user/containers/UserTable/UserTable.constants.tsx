import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

export const USER_TABLE_PROPS = {
  columns: [{ id: 'email' }, { id: 'first' }, { id: 'last' }],
  name: USER_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<UserModel, UserFormModel>, 'service'>;
