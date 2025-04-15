import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createRelatedResourceResolver } from '@lib/backend/resource/utils/createRelatedResourceResolver/createRelatedResourceResolver';
import { TestableRelatedResource } from '@lib/backend/test/resources/TestableRelatedResource/TestableRelatedResource';
import { TestableRelatedResourceImplementation } from '@lib/backend/test/resources/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { type TestableRelatedResourceResolverModel } from '@lib/backend/test/resources/TestableRelatedResource/TestableRelatedResourceResolver/TestableRelatedResourceResolver.models';
import { TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

@withContainer()
@withResolver({ Resource: () => TestableRelatedResource })
export class TestableRelatedResourceResolver
  extends createRelatedResourceResolver<TestableRelatedResourceModel, TestableEntityResourceModel>({
    Resource: () => TestableRelatedResource,
    ResourceImplementation: TestableRelatedResourceImplementation,
    name: 'relatedOneToMany',
  })
  implements TestableRelatedResourceResolverModel {}
