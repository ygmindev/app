import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { DummyUserResource } from '#lib-backend/test/resources/DummyUserResource/DummyUserResource';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyUserResource/DummyUserResource.constants';
import {
  type DummyUserResourceFormModel,
  type DummyUserResourceModel,
} from '#lib-shared/test/resources/DummyUserResource/DummyUserResource.models';
import { type DummyUserResourceServiceModel } from '#lib-shared/test/resources/DummyUserResource/DummyUserResourceService/DummyUserResourceService.models';

@withContainer({ name: `${DUMMY_ENTITY_RESOURCE_RESOURCE_NAME}Service` })
export class DummyUserResourceService
  extends createEntityResourceService<DummyUserResourceModel, DummyUserResourceFormModel>({
    Resource: DummyUserResource,
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
  implements DummyUserResourceServiceModel {}
