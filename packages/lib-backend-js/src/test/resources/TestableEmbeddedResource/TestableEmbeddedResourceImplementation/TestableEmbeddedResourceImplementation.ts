import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { TestableEmbeddedResource } from '@lib/backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableEntityResourceImplementation } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import {
  type TestableEmbeddedResourceFormModel,
  type TestableEmbeddedResourceModel,
} from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEmbeddedResourceImplementationModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation.models';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

@withContainer({ name: `${TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME}Implementation` })
export class TestableEmbeddedResourceImplementation
  extends createEmbeddedResourceImplementation<
    TestableEmbeddedResourceModel,
    TestableEmbeddedResourceFormModel,
    TestableEntityResourceModel,
    TestableEntityResourceFormModel
  >({
    Resource: TestableEmbeddedResource,
    RootImplementation: TestableEntityResourceImplementation,
    name: TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME,
  })
  implements TestableEmbeddedResourceImplementationModel {}
