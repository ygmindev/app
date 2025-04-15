import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { TestableEntityResourceImplementation } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TestableRelatedResource } from '@lib/backend/test/resources/TestableRelatedResource/TestableRelatedResource';
import { TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.constants';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';
import { type TestableRelatedResourceImplementationModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation.models';

@withContainer({ name: `${TESTABLE_RELATED_RESOURCE_RESOURCE_NAME}Implementation` })
export class TestableRelatedResourceImplementation
  extends createRelatedResourceImplementation<
    TestableRelatedResourceModel,
    TestableEntityResourceModel
  >({
    Resource: TestableRelatedResource,
    RootImplementation: TestableEntityResourceImplementation,
    name: 'relatedOneToMany',
    root: 'rootOneToMany',
  })
  implements TestableRelatedResourceImplementationModel {}
