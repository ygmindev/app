import type { SeedDataModel } from '@lib/backend/database/utils/seed/seed.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

export const SEED_DATA: SeedDataModel = {
  [DUMMY_ENTITY_RESOURCE_RESOURCE_NAME]: [
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

  [USER_RESOURCE_NAME]: [{ email: 'ygmindev@gmail.com', first: 'YG', last: 'Min' }],
};
