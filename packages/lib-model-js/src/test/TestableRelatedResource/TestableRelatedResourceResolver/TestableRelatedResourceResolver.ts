import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.entity';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { TestableRelatedResourceImplementation } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { type TestableRelatedResourceResolverModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceResolver/TestableRelatedResourceResolver.models';

@withContainer()
@withResolver({ Resource: () => TestableRelatedResource })
export class TestableRelatedResourceResolver
  extends createEntityResourceResolver<TestableRelatedResourceModel>({
    Resource: () => TestableRelatedResource,
    ResourceImplementation: TestableRelatedResourceImplementation,
    name: 'relatedOneToMany',
  })
  implements TestableRelatedResourceResolverModel {}
