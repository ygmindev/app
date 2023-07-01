import { createUpdate } from '#lib-backend/resource/utils/createUpdate/createUpdate';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createUpdate });

describe(displayName, () => {
  const RESOURCE_PROPERTY = 'RESOURCE_PROPERTY';

  class ResourceF {
    [RESOURCE_PROPERTY] = RESOURCE_PROPERTY;
  }

  test('works', async () => {
    const result = new (createUpdate({
      Resource: ResourceF,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty(RESOURCE_PROPERTY);
  });
});
