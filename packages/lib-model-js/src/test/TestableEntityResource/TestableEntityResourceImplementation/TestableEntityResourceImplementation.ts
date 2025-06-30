import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceImplementationModel } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation.models';

@withContainer({ name: `${TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME}Implementation` })
export class TestableEntityResourceImplementation
  extends createEntityResourceImplementation<TestableEntityResourceModel>({
    Resource: TestableEntityResource,
    afterCreate: async ({ output }) => output,
    afterGet: async ({ output }) => output,
    afterGetConnection: async ({ output }) => output,
    afterGetMany: async ({ output }) => output,
    afterRemove: async ({ output }) => output,
    afterUpdate: async ({ output }) => output,
    beforeCreate: async ({ input }) => input,
    beforeGet: async ({ input }) => input,
    beforeGetConnection: async ({ input }) => input,
    beforeGetMany: async ({ input }) => input,
    beforeRemove: async ({ input }) => input,
    beforeUpdate: async ({ input }) => input,
    name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements TestableEntityResourceImplementationModel {}
