import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceImplementationModel } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation.models';

@withContainer()
@withResolver({ Resource: () => TestableEntityResource })
export class TestableEntityResourceResolver
  extends createEntityResourceResolver<TestableEntityResourceModel>({
    Resource: () => TestableEntityResource,
    ResourceImplementation: TestableEntityResourceImplementation,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements TestableEntityResourceImplementationModel {}
