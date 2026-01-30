import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { UserInput } from '@lib/frontend/user/components/UserInput/UserInput';
import { ACCESS_RESOURCE_NAME, ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';

export const ACCESS_RESOURCE_PARAMS = {
  fields: [
    {
      id: ROLE_RESOURCE_NAME,

      options: Object.values(ACCESS_ROLE).map((v) => ({ id: v })),
      renderer: ({ value }) => (
        <Wrapper
          isAlign
          isRow>
          <Chip color={THEME_COLOR.SECONDARY}>{value}</Chip>
        </Wrapper>
      ),
    },

    {
      field: () => <UserInput />,
      fields: [{ id: 'first' }, { id: 'last' }, { id: 'email' }],
      id: USER_RESOURCE_NAME,
    },

    { id: 'meta' },
  ],
  name: ACCESS_RESOURCE_NAME,
} satisfies ResourceParamsModel<AccessModel>;
