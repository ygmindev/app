import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource.entity';
import { TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.constants';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { TestableResource } from '@lib/model/test/TestableResource/TestableResource';

@withEntity({ isDatabase: true, name: TESTABLE_RELATED_RESOURCE_RESOURCE_NAME })
export class TestableRelatedResource
  extends TestableResource
  implements TestableRelatedResourceModel
{
  @withManyToManyField({ Resource: () => TestableEntityResource, leaf: 'relatedManyToMany' })
  rootManyToMany?: CollectionModel<TestableEntityResourceModel>;

  @withManyToOneField({ Resource: () => TestableEntityResource })
  rootOneToMany?: RefModel<TestableEntityResourceModel>;
}

export default TestableRelatedResource;
