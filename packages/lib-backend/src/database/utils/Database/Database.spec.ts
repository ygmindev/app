import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { testResourceService } from '@lib/backend/test/utils/testResourceService/testResourceService';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import type { DummyEntityResourceModel } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => Database });

describe(displayName, () => {
  test('test', async () => {
    console.warn('@@@Database test');
    const _database = Container.get(Database, DATABASE_TYPE.MONGO);
    const _service = _database.getRepository<DummyEntityResourceModel>({
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    testResourceService({ service: _service });
  });
});
