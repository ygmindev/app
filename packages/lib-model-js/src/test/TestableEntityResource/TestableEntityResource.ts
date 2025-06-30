import { withEmbeddedField } from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { TestableEmbeddedResource } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableRelatedResource } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource';
import { TestableResource } from '@lib/model/test/TestableResource/TestableResource';
import { Collection } from '@lib/backend/core/utils/Collection/Collection';
import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

@withEntity({ isDatabase: true, name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME })
export class TestableEntityResource
  extends TestableResource
  implements TestableEntityResourceModel
{
  @withEmbeddedField({ Resource: () => TestableEmbeddedResource })
  embedded?: Array<TestableEmbeddedResourceModel>;

  @withManyToManyField({ Resource: () => TestableRelatedResource, root: 'rootManyToMany' })
  relatedManyToMany?: CollectionModel<TestableRelatedResourceModel> = new Collection(this);

  @withOneToManyField({ Resource: () => TestableRelatedResource, root: 'rootOneToMany' })
  relatedOneToMany?: CollectionModel<TestableRelatedResourceModel> = new Collection(this);
}
