import type { SeedDataModel } from '@lib/backend/database/utils/seed/seed.models';
import { UserService } from '@lib/backend/user/resources/User/UserService/UserService';
import {
  ACCESS_RESOURCE_NAME,
  ACCESS_ROLE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import type { AccessFormModel } from '@lib/shared/auth/resources/Access/Access.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import type { DummyEntityResourceFormModel } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import type { UserFormModel } from '@lib/shared/user/resources/User/User.models';

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

export const SEED_DATA: Array<SeedDataModel<unknown>> = [
  {
    data: [
      { email: 'ygmindev@gmail.com', first: 'YG', last: 'Min' },
      { email: 'admin@admin.com', first: 'Admin', last: 'Admin' },
    ],
    name: USER_RESOURCE_NAME,
  } as SeedDataModel<UserFormModel>,

  {
    data: [
      async () => {
        const { result } = await Container.get(UserService).get({
          filter: { email: 'admin@admin.com' },
        });
        return { _uid: result?._id, role: ACCESS_ROLE.ADMIN };
      },
    ],
    name: ACCESS_RESOURCE_NAME,
  } as SeedDataModel<AccessFormModel>,

  {
    data: DUMMY_ENTITY_RESOURCE_SEED_DATA,
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  } as SeedDataModel<DummyEntityResourceFormModel>,
];
