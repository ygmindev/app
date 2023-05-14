import { Result } from '@lib/backend/resource/utils/Result/Result';
import { DummyEntityResource } from '@lib/backend/test/resources/DummyEntityResource/DummyEntityResource';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import isArray from 'lodash/isArray';

const { displayName } = withTest({ Result });

describe(displayName, () => {
  test('throws with unsupported method', async () => {
    expect(() =>
      Result({
        Resource: DummyEntityResource,
        method: 'unsupported method' as ResourceMethodTypeModel,
        name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
      }),
    ).toThrowError(InvalidTypeError);
  });

  test('works with create', async () => {
    const _Result = Result({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = _Result && new _Result();
    expect(result).toHaveProperty('stringProperty');
  });

  test('works with get', async () => {
    const _Result = Result({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.GET,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = _Result && new _Result();
    expect(result).toHaveProperty('stringProperty');
  });

  test('works with get many', async () => {
    const _Result = Result({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.GET_MANY,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    expect(isArray(_Result)).toStrictEqual(true);
    const result = _Result && new _Result[0]();
    expect(result).toHaveProperty('stringProperty');
  });

  test('works with get connection', async () => {
    const _Result = Result({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.GET_CONNECTION,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = _Result && new _Result();
    expect(result).toHaveProperty('edges');
    expect(result).toHaveProperty('pageInfo');
  });

  test('works with remove', async () => {
    const _Result = Result({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.REMOVE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = _Result && new _Result();
    expect(result).toHaveProperty('stringProperty');
  });

  test('works with update', async () => {
    const _Result = Result({
      Resource: DummyEntityResource,
      method: RESOURCE_METHOD_TYPE.UPDATE,
      name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME,
    });
    const result = _Result && new _Result();
    expect(result).toHaveProperty('stringProperty');
  });
});
