import { type SeedDataModel } from '@lib/backend/test/utils/seed/seed.models';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceFormModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';

export const TESTABLE_ENTITY_RESOURCE_SEED_DATA: Array<TestableEntityResourceFormModel> = [
  {
    stringField: 'stringField1',
    stringFieldOptional: 'stringFieldOptional1',
  },
  { stringField: 'stringField1' },
  { stringField: 'stringField1' },
  {
    stringArrayField: ['stringArrayFieldElement1'],
    stringField: 'stringField1',
    stringFieldOptional: 'stringFieldOptional1',
  },
  { stringField: 'stringField2' },
  { stringField: 'stringField2' },
];

export const SEED_DATA = [
  {
    data: () => [USER_FIXTURE],
    name: USER_RESOURCE_NAME,
  },

  {
    data: () => TESTABLE_ENTITY_RESOURCE_SEED_DATA,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  },
] satisfies Array<SeedDataModel<unknown>>;
