import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';
import type { DummyEntityResourceServiceModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService.models';

@withContainer({ name: `${DUMMY_ENTITY_RESOURCE_RESOURCE_NAME}Service` })
export class DummyEntityResourceService
  extends EntityResourceService<DummyEntityResourceModel, DummyEntityResourceFormModel>({
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
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  })
  implements DummyEntityResourceServiceModel {}
