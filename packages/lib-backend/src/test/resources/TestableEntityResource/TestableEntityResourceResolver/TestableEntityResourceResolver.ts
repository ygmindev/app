import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { TestableEntityResource } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResource';
import { TestableEntityResourceImplementation } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceImplementationModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation.models';

@withContainer()
@withResolver({ Resource: () => TestableEntityResource })
export class TestableEntityResourceResolver
  extends createEntityResourceResolver<
    TestableEntityResourceModel,
    TestableEntityResourceFormModel
  >({
    Resource: () => TestableEntityResource,
    ResourceImplementation: TestableEntityResourceImplementation,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements TestableEntityResourceImplementationModel {}
