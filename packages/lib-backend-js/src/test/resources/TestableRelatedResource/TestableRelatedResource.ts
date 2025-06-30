import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { TestableEntityResource } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResource';
import { TestableResource } from '@lib/backend/test/resources/TestableResource/TestableResource';
import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.constants';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

@withEntity({ isDatabase: true, name: TESTABLE_RELATED_RESOURCE_RESOURCE_NAME })
export class TestableRelatedResource
  extends TestableResource
  implements TestableRelatedResourceModel
{
  @withManyToManyField({ Resource: () => TestableEntityResource, leaf: 'relatedManyToMany' })
  rootManyToMany?: CollectionModel<TestableEntityResourceModel>;

  @withManyToOneField({ Resource: () => TestableEntityResource })
  rootOneToMany?: RefFieldModel<TestableEntityResourceModel>;
}
