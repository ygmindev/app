import { createResourceArgs } from '@lib/backend/resource/utils/createResourceArgs/createResourceArgs';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createResourceArgs });

describe(displayName, () => {
  const RESOURCE_PROPERTY = 'RESOURCE_PROPERTY';

  class ResourceF {
    [RESOURCE_PROPERTY] = RESOURCE_PROPERTY;
  }

  test('throws with unsupported method', async () => {
    expect(() =>
      createResourceArgs({
        Resource: () => ResourceF,
        method: 'unsupported method' as ResourceMethodTypeModel,
        name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
      }),
    ).toThrow(InvalidTypeError);
  });

  test('works with create', async () => {
    const result = new (createResourceArgs({
      Resource: () => ResourceF,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('form');
  });

  test('works with get', async () => {
    const result = new (createResourceArgs({
      Resource: () => ResourceF,
      method: RESOURCE_METHOD_TYPE.GET,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
  });

  test('works with get many', async () => {
    const result = new (createResourceArgs({
      Resource: () => ResourceF,
      method: RESOURCE_METHOD_TYPE.GET_MANY,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
  });

  test('works with get connection', async () => {
    const result = new (createResourceArgs({
      Resource: () => ResourceF,
      method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
    expect(result).toHaveProperty('pagination');
  });

  test('works with remove', async () => {
    const result = new (createResourceArgs({
      Resource: () => ResourceF,
      method: RESOURCE_METHOD_TYPE.REMOVE,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
  });

  test('works with update', async () => {
    const result = new (createResourceArgs({
      Resource: () => ResourceF,
      method: RESOURCE_METHOD_TYPE.UPDATE,
      name: TESTABLE_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
    expect(result).toHaveProperty('update');
  });
});
