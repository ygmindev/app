import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { TestableEmbeddedResource } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEmbeddedResourceImplementationModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';

@withContainer({ name: `${TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME}Implementation` })
export class TestableEmbeddedResourceImplementation
  extends createEmbeddedResourceImplementation<
    TestableEmbeddedResourceModel,
    TestableEntityResourceModel
  >({
    Resource: TestableEmbeddedResource,
    RootImplementation: TestableEntityResourceImplementation,
    name: 'embedded',
  })
  implements TestableEmbeddedResourceImplementationModel {}
