import { Collection } from '@lib/backend/resource/utils/Collection/Collection';
import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { withEmbeddedField } from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { TestableEmbeddedResource } from '@lib/backend/test/resources/TestableEmbeddedResource/TestableEmbeddedResource';
import { TestableRelatedResource } from '@lib/backend/test/resources/TestableRelatedResource/TestableRelatedResource';
import { TestableResource } from '@lib/backend/test/resources/TestableResource/TestableResource';
import { TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

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
