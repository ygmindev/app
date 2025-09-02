import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { TESTABLE_EMBEDDED_RESOURCE_NAME } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TestableResource } from '@lib/model/test/TestableResource/TestableResource';

@withEntity({
  isDatabase: true,
  isEmbeddable: true,
  name: TESTABLE_EMBEDDED_RESOURCE_NAME,
})
export class TestableEmbeddedResource
  extends TestableResource
  implements TestableEmbeddedResourceModel {}

export default TestableEmbeddedResource;
