import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { TESTABLE_ENTITY_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { TestableEntityResource } from '@lib/model/test/TestableEntityResource/TestableEntityResource.entity';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceImplementationModel } from '@lib/model/test/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation.models';

@withContainer()
export class TestableEntityResourceImplementation
  extends createEntityResourceImplementation<TestableEntityResourceModel>({
    Resource: TestableEntityResource,
    beforeCreate: async ({ input }) => {
      input?.form && (input.form.isFixture = true);
      return input;
    },
    name: TESTABLE_ENTITY_RESOURCE_NAME,
  })
  implements TestableEntityResourceImplementationModel {}
