import type { SeedDataModel } from '@lib/backend/database/utils/seed/seed.models';
import {
  ACCESS_RESOURCE_NAME,
  ACCESS_ROLE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

export const SEED_DATA: Array<SeedDataModel<unknown>> = [
  {
    data: [
      { email: 'ygmindev@gmail.com', first: 'YG', last: 'Min' },
      { email: 'admin@gmail.com', first: 'Admin', last: 'Admin' },
    ],
    name: USER_RESOURCE_NAME,
  },

  {
    data: [{ email: 'admin@gmail.com', role: ACCESS_ROLE.ADMIN }],
    name: ACCESS_RESOURCE_NAME,
  },

  {
    data: [
      { stringProperty: 'stringProperty1' },
      { stringProperty: 'stringProperty1' },
      {
        stringProperty: 'stringProperty1',
        stringPropertyOptional: 'stringPropertyOptional1',
      },
      {
        stringArrayProperty: ['stringArrayPropertyElement1'],
        stringProperty: 'stringProperty1',
        stringPropertyOptional: 'stringPropertyOptional1',
      },
      { stringProperty: 'stringProperty2' },
      { stringProperty: 'stringProperty2' },
    ],
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  },
];
