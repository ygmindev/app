import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { TestableResource } from '@lib/backend/test/resources/TestableResource/TestableResource';
import { TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';

@withEntity({
  isDatabase: true,
  isEmbeddable: true,
  name: TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME,
})
export class TestableEmbeddedResource
  extends TestableResource
  implements TestableEmbeddedResourceModel {}
