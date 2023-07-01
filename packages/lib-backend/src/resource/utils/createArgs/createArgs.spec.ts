import { createArgs } from '#lib-backend/resource/utils/createArgs/createArgs';
import { InvalidTypeError } from '#lib-shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createArgs });

describe(displayName, () => {
  const RESOURCE_PROPERTY = 'RESOURCE_PROPERTY';

  class ResourceF {
    [RESOURCE_PROPERTY] = RESOURCE_PROPERTY;
  }

  test('throws with unsupported method', async () => {
    expect(() =>
      createArgs({
        Resource: ResourceF,
        method: 'unsupported method' as ResourceMethodTypeModel,
        name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
      }),
    ).toThrowError(InvalidTypeError);
  });

  test('works with create', async () => {
    const result = new (createArgs({
      Resource: ResourceF,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('form');
  });

  test('works with get', async () => {
    const result = new (createArgs({
      Resource: ResourceF,
      method: RESOURCE_METHOD_TYPE.GET,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
  });

  test('works with get many', async () => {
    const result = new (createArgs({
      Resource: ResourceF,
      method: RESOURCE_METHOD_TYPE.GET_MANY,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
  });

  test('works with get connection', async () => {
    const result = new (createArgs({
      Resource: ResourceF,
      method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
    expect(result).toHaveProperty('pagination');
  });

  test('works with remove', async () => {
    const result = new (createArgs({
      Resource: ResourceF,
      method: RESOURCE_METHOD_TYPE.REMOVE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
  });

  test('works with update', async () => {
    const result = new (createArgs({
      Resource: ResourceF,
      method: RESOURCE_METHOD_TYPE.UPDATE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    }))();
    expect(result).toHaveProperty('filter');
    expect(result).toHaveProperty('update');
  });
});
