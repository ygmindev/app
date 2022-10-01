import { Form } from '@lib/backend/resource/utils/Form/Form';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => Form });

describe(displayName, () => {
  const RESOURCE_PROPERTY = 'RESOURCE_PROPERTY';

  class _Resource {
    [RESOURCE_PROPERTY] = RESOURCE_PROPERTY;
  }

  test('works', async () => {
    const result = new (Form({ Resource: _Resource, name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME }))();
    expect(result).toHaveProperty(RESOURCE_PROPERTY);
  });
});
