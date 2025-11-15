import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withEmbeddedField } from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { TestableEmbeddedResource } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.entity';
import { TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TESTABLE_ENTITY_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.entity';
import { TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { TestableResource } from '@lib/model/test/TestableResource/TestableResource';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({ name: TESTABLE_ENTITY_RESOURCE_NAME })
export class TestableEntityResource
  extends TestableResource
  implements TestableEntityResourceModel
{
  @withEmbeddedField({ Resource: () => TestableEmbeddedResource })
  embedded?: PartialArrayModel<TestableEmbeddedResourceModel>;

  @withManyToManyField({ Resource: () => TestableRelatedResource, root: 'rootManyToMany' })
  relatedManyToMany?: PartialArrayModel<TestableRelatedResourceModel>;

  @withOneToManyField({ Resource: () => TestableRelatedResource, root: 'rootManyToOne' })
  relatedOneToMany?: PartialArrayModel<TestableRelatedResourceModel>;
}

export default TestableEntityResource;
