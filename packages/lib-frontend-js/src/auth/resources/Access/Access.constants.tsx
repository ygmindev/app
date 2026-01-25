import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { UserInput } from '@lib/frontend/user/components/UserInput/UserInput';
import { ACCESS_RESOURCE_NAME, ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';

export const ACCESS_RESOURCE_PARAMS = {
  fields: [
    {
      id: 'Role',

      options: Object.values(ACCESS_ROLE).map((v) => ({ id: v })),
      renderer: ({ value }) => (
        <Wrapper
          isAlign
          isRow>
          {value?.map((v) => (
            <Chip
              color={THEME_COLOR.SECONDARY}
              key={v}>
              {v}
            </Chip>
          ))}
        </Wrapper>
      ),
    },

    {
      field: () => <UserInput />,
      fields: [{ id: 'first' }, { id: 'last' }, { id: 'email' }, { id: 'phone' }],
      id: 'User',
    },
  ],
  name: ACCESS_RESOURCE_NAME,
} satisfies ResourceParamsModel<AccessModel>;
