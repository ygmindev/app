import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { TestableEmbeddedResource } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableEmbeddedResourceImplementation } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation';
import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEmbeddedResourceImplementationModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';

@withContainer()
@withResolver({ Resource: () => TestableEmbeddedResource })
export class TestableEmbeddedResourceResolver
  extends createEmbeddedResourceResolver<
    TestableEmbeddedResourceModel,
    TestableEntityResourceModel
  >({
    Resource: () => TestableEmbeddedResource,
    ResourceImplementation: TestableEmbeddedResourceImplementation,
    name: 'embedded',
  })
  implements TestableEmbeddedResourceImplementationModel {}
