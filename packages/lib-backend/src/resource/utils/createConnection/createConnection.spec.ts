import { createConnection } from '@lib/backend/resource/utils/createConnection/createConnection';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Connection: createConnection });

describe(displayName, () => {
  test('works', async () => {
    const result = new (createConnection({
      Resource: class {},
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('edges');
    expect(result).toHaveProperty('pageInfo');
  });
});
