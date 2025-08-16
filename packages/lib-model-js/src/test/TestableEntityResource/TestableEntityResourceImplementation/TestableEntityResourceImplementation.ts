import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource.entity';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceImplementationModel } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation.models';

@withContainer()
export class TestableEntityResourceImplementation
  extends createEntityResourceImplementation<TestableEntityResourceModel>({
    Resource: TestableEntityResource,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements TestableEntityResourceImplementationModel {}
