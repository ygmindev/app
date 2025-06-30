import { createEdge } from '@lib/backend/resource/utils/createEdge/createEdge';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/model/test/TestableEntityResource/TestableEntityResource.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createEdge });

describe(displayName, () => {
  class ResourceF {}

  test('works', async () => {
    const result = new (createEdge({
      Resource: ResourceF,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('node');
    expect(result).toHaveProperty('cursor');
  });
});
