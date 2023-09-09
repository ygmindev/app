import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

export const USER_TABLE_PROPS = {
  columns: [{ _id: 'first' }, { _id: 'last' }],
  filters: [{ _id: 'first' }, { _id: 'last' }],
  form: <Wrapper />,
} satisfies Omit<ResourceTablePropsModel<UserModel, UserFormModel>, 'service'>;
