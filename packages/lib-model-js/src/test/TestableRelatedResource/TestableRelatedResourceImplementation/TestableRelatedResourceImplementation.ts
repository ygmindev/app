import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { TESTABLE_RELATED_RESOURCE_NAME } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.constants';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.entity';
import { TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { type TestableRelatedResourceImplementationModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation.models';

@withContainer()
export class TestableRelatedResourceImplementation
  extends createEntityResourceImplementation<TestableRelatedResourceModel>({
    Resource: TestableRelatedResource,
    name: TESTABLE_RELATED_RESOURCE_NAME,
  })
  implements TestableRelatedResourceImplementationModel {}
