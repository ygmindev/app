import { createRoot } from '@lib/backend/resource/utils/createRoot/createRoot';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createRoot });

describe(displayName, () => {
  class RootEntity implements EntityResourceModel {
    _id = uid();
    created = new Date();
  }

  test('works', async () => {
    const Root = createRoot({
      RootResource: () => RootEntity,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = new Root();
    expect(result).toHaveProperty('root');
  });
});
