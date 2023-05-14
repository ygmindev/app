import { Connection } from '@lib/backend/resource/utils/Connection/Connection';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Connection });

describe(displayName, () => {
  test('works', async () => {
    const result = new (Connection({
      Resource: class {},
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('edges');
    expect(result).toHaveProperty('pageInfo');
  });
});
