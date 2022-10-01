import { Edge } from '@lib/backend/resource/utils/Edge/Edge';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => Edge });

describe(displayName, () => {
  class _Resource {}

  test('works', async () => {
    const result = new (Edge({ Resource: _Resource, name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME }))();
    expect(result).toHaveProperty('node');
    expect(result).toHaveProperty('cursor');
  });
});
