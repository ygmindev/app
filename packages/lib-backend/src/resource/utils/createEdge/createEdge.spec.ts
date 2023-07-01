import { createEdge } from '#lib-backend/resource/utils/createEdge/createEdge';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEdge });

describe(displayName, () => {
  class ResourceF {}

  test('works', async () => {
    const result = new (createEdge({
      Resource: ResourceF,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('node');
    expect(result).toHaveProperty('cursor');
  });
});
