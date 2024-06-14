import { MultipleInput } from '@lib/frontend/data/components/MultipleInput/MultipleInput';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import {
  ACCESS_RESOURCE_NAME,
  ACCESS_ROLE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';

export const ACCESS_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    {
      field: ({ value }) => (
        <MultipleInput
          options={Object.values(ACCESS_ROLE).map((v) => ({ id: v }))}
          value={value as Array<string>}
        />
      ),
      id: 'role',
    },
    { id: 'User' },
  ],
  name: ACCESS_RESOURCE_NAME,
} satisfies ResourceParamsModel<AccessModel>;
