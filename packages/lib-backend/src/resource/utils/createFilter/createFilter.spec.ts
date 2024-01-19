import { createFilter } from '@lib/backend/resource/utils/createFilter/createFilter';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createFilter });

describe(displayName, () => {
  const RESOURCE_PROPERTY = 'RESOURCE_PROPERTY';

  class ResourceF {
    [RESOURCE_PROPERTY] = RESOURCE_PROPERTY;
  }

  test('works', async () => {
    const result = new (createFilter({
      Resource: ResourceF,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty(RESOURCE_PROPERTY);
  });
});
