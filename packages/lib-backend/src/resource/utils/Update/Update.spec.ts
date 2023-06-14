import { Update } from '#lib-backend/resource/utils/Update/Update';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Update });

describe(displayName, () => {
  const RESOURCE_PROPERTY = 'RESOURCE_PROPERTY';

  class _Resource {
    [RESOURCE_PROPERTY] = RESOURCE_PROPERTY;
  }

  test('works', async () => {
    const result = new (Update({
      Resource: _Resource,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty(RESOURCE_PROPERTY);
  });
});
