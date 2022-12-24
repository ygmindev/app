import { DatabaseMain } from '@lib/backend/database/utils/DatabaseMain/DatabaseMain';
import { testResourceService } from '@lib/backend/test/utils/testResourceService/testResourceService';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import type { DummyEntityResourceModel } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => DatabaseMain });

describe(displayName, () => {
  const database = Container.get(DatabaseMain);
  const service = database.getRepository<DummyEntityResourceModel>({
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  });
  testResourceService({ service });
});
