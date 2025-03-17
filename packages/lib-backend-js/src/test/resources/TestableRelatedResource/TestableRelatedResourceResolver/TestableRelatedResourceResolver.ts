import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { TestableRelatedResource } from '@lib/backend/test/resources/TestableRelatedResource/TestableRelatedResource';
import { TestableRelatedResourceImplementation } from '@lib/backend/test/resources/TestableRelatedResource/TestableRelatedResourceImplementation/TestableRelatedResourceImplementation';
import { type TestableRelatedResourceResolverModel } from '@lib/backend/test/resources/TestableRelatedResource/TestableRelatedResourceResolver/TestableRelatedResourceResolver.models';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.constants';
import {
  type TestableRelatedResourceFormModel,
  type TestableRelatedResourceModel,
} from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

@withContainer()
@withResolver({ Resource: () => TestableRelatedResource })
export class TestableRelatedResourceResolver
  extends createEntityResourceResolver<
    TestableRelatedResourceModel,
    TestableRelatedResourceFormModel
  >({
    Resource: () => TestableRelatedResource,
    ResourceImplementation: TestableRelatedResourceImplementation,
    name: TESTABLE_RELATED_RESOURCE_RESOURCE_NAME,
  })
  implements TestableRelatedResourceResolverModel {}
