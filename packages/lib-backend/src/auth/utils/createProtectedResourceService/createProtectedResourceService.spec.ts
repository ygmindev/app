import { createProtectedResoureService } from '#lib-backend/auth/utils/createProtectedResourceService/createProtectedResourceService';
import { Container } from '#lib-backend/core/utils/Container/Container';
import { DummyProtectedResoureService } from '#lib-backend/test/resources/DummyProtectedResoure/DummyProtectedResoureService/DummyProtectedResoureService';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createProtectedResoureService });

describe(displayName, () => {
  void testResourceService({
    getService: () => Container.get(DummyProtectedResoureService),
  });
});
