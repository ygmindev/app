import { DatabaseMongo } from '@lib/backend/database/utils/DatabaseMongo/DatabaseMongo';
import { testResourceService } from '@lib/backend/test/utils/testResourceService/testResourceService';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import type { DummyEntityResourceModel } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => DatabaseMongo });

describe(displayName, () => {
  const database = Container.get(DatabaseMongo);
  const service = database.getRepository<DummyEntityResourceModel>({
    name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
  });
  testResourceService({ service });
});
