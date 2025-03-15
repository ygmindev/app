import { type TestableEmbeddedResourceFormModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export const TESTABLE_ENTITY_RESOURCE_FIXTURE: TestableEntityResourceModel = {
  _id: '6448881dd34cb0fcb6734acf',
  created: new Date(2000, 1, 1),
  stringField: 'stringField',
};

export const TESTABLE_ENTITY_RESOURCE_SEED_DATA: Array<
  TestableEntityResourceFormModel | TestableEmbeddedResourceFormModel
> = [
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
