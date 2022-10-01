import { withRoot } from '@lib/backend/resource/decorators/withRoot/withRoot';
import { uid } from '@lib/shared/core/utils/uid/uid';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => withRoot });

describe(displayName, () => {
  const BASE_PROPERTY = 'BASE_PROPERTY';

  class _Root implements EntityResourceModel {
    _id = uid();
    created = new Date();
  }

  test('works', async () => {
    @withRoot({ Root: _Root, name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME })
    class _Base {
      [BASE_PROPERTY] = BASE_PROPERTY;
    }

    const result = new _Base();
    expect(result[BASE_PROPERTY]).toStrictEqual(BASE_PROPERTY);
    expect(result).toHaveProperty('root');
  });
});
