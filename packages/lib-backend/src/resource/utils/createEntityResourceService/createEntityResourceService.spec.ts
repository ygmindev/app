import { Container } from '#lib-backend/core/utils/Container/Container';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { DummyEntityResourceService } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService';
import { testResourceService } from '#lib-backend/test/utils/testResourceService/testResourceService';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEntityResourceService });

describe(displayName, () => {
  void testResourceService({ getService: () => Container.get(DummyEntityResourceService) });
});
