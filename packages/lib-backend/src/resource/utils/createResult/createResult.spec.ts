import isArray from 'lodash/isArray';

import { createResult } from '#lib-backend/resource/utils/createResult/createResult';
import { DummyEntityResource } from '#lib-backend/test/resources/DummyEntityResource/DummyEntityResource';
import { InvalidTypeError } from '#lib-shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ createResult });

describe(displayName, () => {
  test('throws with unsupported method', async () => {
    expect(() =>
      createResult({
        Resource: DummyEntityResource,
        method: 'unsupported method' as ResourceMethodTypeModel,
        name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
      }),
    ).toThrowError(InvalidTypeError);
  });

  test('works with create', async () => {
    const ResultF = createResult({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = ResultF && new ResultF();
    expect(result).toHaveProperty('stringProperty');
  });

  test('works with get', async () => {
    const ResultF = createResult({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.GET,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = ResultF && new ResultF();
    expect(result).toHaveProperty('stringProperty');
  });

  test('works with get many', async () => {
    const ResultF = createResult({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.GET_MANY,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    expect(isArray(ResultF)).toStrictEqual(true);
    const result = ResultF && new ResultF[0]();
    expect(result).toHaveProperty('stringProperty');
  });

  test('works with get connection', async () => {
    const ResultF = createResult({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = ResultF && new ResultF();
    expect(result).toHaveProperty('edges');
    expect(result).toHaveProperty('pageInfo');
  });

  test('works with remove', async () => {
    const ResultF = createResult({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.REMOVE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = ResultF && new ResultF();
    expect(result).toHaveProperty('stringProperty');
  });

  test('works with update', async () => {
    const ResultF = createResult({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.UPDATE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = ResultF && new ResultF();
    expect(result).toHaveProperty('stringProperty');
  });
});
