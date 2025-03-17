import { RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withRootField } from '@lib/backend/resource/utils/withRootField/withRootField';
import { TestableEntityResource } from '@lib/backend/test/resources/TestableEntityResource/TestableEntityResource';
import { TestableResource } from '@lib/backend/test/resources/TestableResource/TestableResource';
import { TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

@withEntity({
  isDatabase: true,
  isEmbeddable: true,
  name: TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME,
})
export class TestableEmbeddedResource
  extends TestableResource
  implements TestableEmbeddedResourceModel
{
  @withRootField({ Resource: () => TestableEntityResource })
  rootEmbedded!: RefFieldModel<TestableEntityResourceModel>;
}
