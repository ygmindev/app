import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export const FIXTURES: PartialArrayModel<TestableEntityResourceModel> = [
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
].map((v) => ({ ...v, isFixture: true }));
