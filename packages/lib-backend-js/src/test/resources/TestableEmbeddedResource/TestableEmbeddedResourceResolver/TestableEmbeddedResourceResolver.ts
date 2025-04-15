import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { TestableEmbeddedResource } from '@lib/backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableEmbeddedResourceImplementation } from '@lib/backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEmbeddedResourceImplementationModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

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
