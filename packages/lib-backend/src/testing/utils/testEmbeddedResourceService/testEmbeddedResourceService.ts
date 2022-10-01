import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import type { TestEmbeddedResourceServiceParamsModel } from '@lib/backend/testing/utils/testEmbeddedResourceService/testEmbeddedResourceService.models';
import { testResourceService } from '@lib/backend/testing/utils/testResourceService/testResourceService';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type { DummyEntityResourceModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

export const testEmbeddedResourceService = async ({
  service,
}: TestEmbeddedResourceServiceParamsModel): Promise<void> => {
  const _rootRepository = Container.get(DatabaseMain).getRepository<DummyEntityResourceModel>({
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  });

  let _root: DummyEntityResourceModel | undefined;

  service.decorators = {
    beforeCreate: async ({ input }) => ({ ...input, root: _root }),
    beforeGet: async ({ input }) => ({ ...input, root: _root }),
    beforeGetConnection: async ({ input }) => ({ ...input, root: _root }),
    beforeGetMany: async ({ input }) => ({ ...input, root: _root }),
    beforeRemove: async ({ input }) => ({ ...input, root: _root }),
    beforeUpdate: async ({ input }) => ({ ...input, root: _root }),
  };

  testResourceService({
    before: async () => {
      _root = (await _rootRepository.create({ form: { stringProperty: 'stringProperty' } })).result;
    },
    service,
  });
};
