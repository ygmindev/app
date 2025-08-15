import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';

export const TESTABLE_ENTITY_RESOURCE_SEED_DATA: Array<Partial<TestableEntityResourceModel>> = [
  {
    group: '1',
    index: 1,
    string: 'string1',
    stringOptional: 'stringOptional1',
  },
  {
    group: '1',
    index: 2,
    string: 'string2',
  },
  {
    group: '1',
    index: 3,
    string: 'string3',
  },
  {
    group: '2',
    index: 1,
    string: 'string4',
    stringArray: ['stringArrayElement21', 'stringArrayElement22', 'stringArrayElement23'],
    stringOptional: 'stringOptional2',
  },
  {
    group: '2',
    index: 2,
    string: 'string5',
  },
  {
    group: '2',
    index: 3,
    string: 'string6',
  },
];
