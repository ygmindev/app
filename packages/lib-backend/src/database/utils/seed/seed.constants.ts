import { Container } from '#lib-backend/core/utils/Container/Container';
import { type SeedDataModel } from '#lib-backend/database/utils/seed/seed.models';
import { UserService } from '#lib-backend/user/resources/User/UserService/UserService';
import {
  ACCESS_RESOURCE_NAME,
  ACCESS_ROLE,
} from '#lib-shared/auth/resources/Access/Access.constants';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { type DummyEntityResourceFormModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { USER_FIXTURE } from '#lib-shared/user/resources/User/User.fixtures';

export const DUMMY_ENTITY_RESOURCE_SEED_DATA: Array<DummyEntityResourceFormModel> = [
  {
    stringProperty: 'stringProperty1',
    stringPropertyOptional: 'stringPropertyOptional1',
  },
  { stringProperty: 'stringProperty1' },
  { stringProperty: 'stringProperty1' },
  {
    stringArrayProperty: ['stringArrayPropertyElement1'],
    stringProperty: 'stringProperty1',
    stringPropertyOptional: 'stringPropertyOptional1',
  },
  { stringProperty: 'stringProperty2' },
  { stringProperty: 'stringProperty2' },
];

export const SEED_DATA = [
  {
    data: [USER_FIXTURE],
    name: USER_RESOURCE_NAME,
  },

  {
    data: [
      async () => {
        const { result } = await Container.get(UserService).get({
          filter: [{ field: 'email', value: 'admin@admin.com' }],
        });
        return { _user: result?._id, role: ACCESS_ROLE.ADMIN };
      },
    ],
    name: ACCESS_RESOURCE_NAME,
  },

  {
    data: DUMMY_ENTITY_RESOURCE_SEED_DATA,
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  },
] satisfies Array<SeedDataModel<unknown>>;
