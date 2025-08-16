import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createRelatedResourceResolver } from '@lib/backend/resource/utils/createRelatedResourceResolver/createRelatedResourceResolver';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.entity';
import { TestableRelatedResourceImplementation } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { type TestableRelatedResourceResolverModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResourceResolver/TestableRelatedResourceResolver.models';
import { TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

@withContainer()
@withResolver({ Resource: () => TestableRelatedResource })
export class TestableRelatedResourceResolver
  extends createRelatedResourceResolver<TestableRelatedResourceModel, TestableEntityResourceModel>({
    Resource: () => TestableRelatedResource,
    ResourceImplementation: TestableRelatedResourceImplementation,
    name: 'relatedOneToMany',
  })
  implements TestableRelatedResourceResolverModel {}
