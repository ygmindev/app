import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { FIXTURES } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export const TESTABLE_EMBEDDED_RESOURCE_SEED_DATA: PartialArrayModel<TestableEmbeddedResourceModel> =
  FIXTURES;
