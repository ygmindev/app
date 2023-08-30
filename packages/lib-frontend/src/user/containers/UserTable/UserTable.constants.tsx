import { TextField } from '#lib-frontend/data/components/TextField/TextField';
import { type ResourceTablePropsModel } from '#lib-frontend/resource/components/ResourceTable/ResourceTable.models';
import { type UserFormModel, type UserModel } from '#lib-shared/user/resources/User/User.models';

export const USER_TABLE_PROPS = {
  columns: [{ id: 'first' }, { id: 'last' }],
  filters: [{ id: 'first' }, { id: 'last' }],
  form: {
    first: {
      element: <TextField />,
    },
  },
} satisfies Omit<ResourceTablePropsModel<UserModel, UserFormModel>, 'service'>;
