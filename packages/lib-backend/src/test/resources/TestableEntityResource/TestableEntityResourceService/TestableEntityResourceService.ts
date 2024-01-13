import { withContainer } from '@lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '@lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { TestableEntityResource } from '@lib-backend/test/resources/TestableEntityResource/TestableEntityResource';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib-shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceServiceModel } from '@lib-shared/test/resources/TestableEntityResource/TestableEntityResourceService/TestableEntityResourceService.models';

@withContainer({ name: `${TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME}Service` })
export class TestableEntityResourceService
  extends createEntityResourceService<TestableEntityResourceModel, TestableEntityResourceFormModel>(
    {
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
    },
  )
  implements TestableEntityResourceServiceModel {}
