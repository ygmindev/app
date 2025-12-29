import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource.entity';
import { TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { TESTABLE_RELATED_RESOURCE_NAME } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.constants';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { TestableResource } from '@lib/model/test/TestableResource/TestableResource';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({ name: TESTABLE_RELATED_RESOURCE_NAME })
export class TestableRelatedResource
  extends TestableResource
  implements TestableRelatedResourceModel
{
  @withManyToManyField({ Resource: () => TestableEntityResource })
  rootManyToMany?: PartialArrayModel<TestableEntityResourceModel>;

  @withManyToOneField({ Resource: () => TestableEntityResource })
  rootManyToOne?: RefModel<TestableEntityResourceModel>;
}

export default TestableRelatedResource;
