import {
  type TestableEmbeddedResourceFormModel,
  type TestableEmbeddedResourceModel,
} from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';

export const TESTABLE_EMBEDDED_RESOURCE_FIXTURE: TestableEmbeddedResourceModel = {
  _id: '6448881dd34cb0fcb6734ac1',
  created: new Date(2000, 1, 1),
  string: 'string',
};

export const TESTABLE_EMBEDDED_RESOURCE_SEED_DATA: Array<TestableEmbeddedResourceFormModel> =
  TESTABLE_ENTITY_RESOURCE_SEED_DATA;
