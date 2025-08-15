import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { TestableEmbeddedResource } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource';
import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEmbeddedResourceImplementationModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';

@withContainer()
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
