import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TestableEntityResourceImplementation } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { type TestableRelatedResourceImplementationModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation.models';

@withContainer()
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
