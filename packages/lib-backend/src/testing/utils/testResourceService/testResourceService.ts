import { seed } from '@lib/backend/database/utils/seed/seed';
import type { TestResourceServiceParamsModel } from '@lib/backend/testing/utils/testResourceService/testResourceService.models';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { FilterCombineModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';
import { filter, find, isEqual, keys, pick, some } from 'lodash';

export const testResourceService = async ({
  before,
  service,
}: TestResourceServiceParamsModel): Promise<void> => {
  const afterCreate =
    service.decorators?.afterCreate && jest.spyOn(service.decorators, 'afterCreate');
  const afterGet = service.decorators?.afterGet && jest.spyOn(service.decorators, 'afterGet');
  const afterGetConnection =
    service.decorators?.afterGetConnection && jest.spyOn(service.decorators, 'afterGetConnection');
  const afterGetMany =
    service.decorators?.afterGetMany && jest.spyOn(service.decorators, 'afterGetMany');
  const afterRemove =
    service.decorators?.afterRemove && jest.spyOn(service.decorators, 'afterRemove');
  const afterUpdate =
    service.decorators?.afterUpdate && jest.spyOn(service.decorators, 'afterUpdate');
  const beforeCreate =
    service.decorators?.beforeCreate && jest.spyOn(service.decorators, 'beforeCreate');
  const beforeGet = service.decorators?.beforeGet && jest.spyOn(service.decorators, 'beforeGet');
  const beforeGetConnection =
    service.decorators?.beforeGetConnection &&
    jest.spyOn(service.decorators, 'beforeGetConnection');
  const beforeGetMany =
    service.decorators?.beforeGetMany && jest.spyOn(service.decorators, 'beforeGetMany');
  const beforeRemove =
    service.decorators?.beforeRemove && jest.spyOn(service.decorators, 'beforeRemove');
  const beforeUpdate =
    service.decorators?.beforeUpdate && jest.spyOn(service.decorators, 'beforeUpdate');

  beforeEach(async () => {
    await seed({ names: [DUMMY_ENTITY_RESOURCE_RESOURCE_NAME] });
    before && (await before());
    jest.clearAllMocks();
  });

  test('works with create', async () => {
    const input: InputModel<
      RESOURCE_METHOD_TYPE.CREATE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      form: { stringProperty: 'stringProperty1', stringPropertyOptional: undefined },
    };
    const { result } = await service.create(input);
    beforeCreate && expect(beforeCreate).toHaveBeenCalledTimes(1);
    afterCreate && expect(afterCreate).toHaveBeenCalledTimes(1);
    expect(result?._id).toBeDefined();
    expect(result?.created && new Date().getTime() - result?.created.getTime()).toBeLessThan(1000);
    expect(result?.stringProperty).toStrictEqual(input.form.stringProperty);
    expect(keys(result)).not.toContainEqual('stringPropertyOptional');
  });

  test('works with get by id', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
    };
    const { result } = await service.get(input);
    const expected = find(data, input.filter) as DummyEntityResourceModel;

    beforeGet && expect(beforeGet).toHaveBeenCalledTimes(1);
    afterGet && expect(afterGet).toHaveBeenCalledTimes(1);
    expect(result?._id).toStrictEqual(expected._id);
  });

  test('works with get by partial', async () => {
    const { result: data } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
    };
    const { result } = await service.get(input);
    const expected = find(data, input.filter) as DummyEntityResourceModel;

    beforeGet && expect(beforeGet).toHaveBeenCalledTimes(1);
    afterGet && expect(afterGet).toHaveBeenCalledTimes(1);
    expect(result?._id).toStrictEqual(expected._id);
  });

  test('works with get by and condition', async () => {
    const { result: data } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: {
        $and: [
          { stringProperty: 'stringProperty1' },
          { stringPropertyOptional: 'stringPropertyOptional1' },
        ],
      },
    };
    const { result } = await service.get(input);
    const expected = find(
      data,
      merge({
        values: ((input.filter as FilterCombineModel<DummyEntityResourceModel>).$and ||
          []) as Array<DummyEntityResourceModel>,
      }),
    ) as DummyEntityResourceModel;

    beforeGet && expect(beforeGet).toHaveBeenCalledTimes(1);
    afterGet && expect(afterGet).toHaveBeenCalledTimes(1);
    expect(result?._id).toStrictEqual(expected._id);
  });

  test('works with get by or condition', async () => {
    const { result: data } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: {
        $or: [{ stringProperty: 'stringProperty1' }, { stringPropertyOptional: 'does not exist' }],
      },
    };
    const { result } = await service.get(input);
    const expected = find(data, (row) =>
      some((input.filter as FilterCombineModel<DummyEntityResourceModel>).$or, (condition) => {
        const _row = pick(row, keys(condition));
        return !isEmpty(_row) && isEqual(_row, condition);
      }),
    ) as DummyEntityResourceModel;

    beforeGet && expect(beforeGet).toHaveBeenCalledTimes(1);
    afterGet && expect(afterGet).toHaveBeenCalledTimes(1);
    expect(result?._id).toStrictEqual(expected._id);
  });

  test('works with getMany by partial', async () => {
    const { result: data } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
    };
    const { result } = await service.getMany(input);
    const expected = filter(data, input.filter) as Array<DummyEntityResourceModel>;

    beforeGetMany && expect(beforeGetMany).toHaveBeenCalledTimes(1);
    afterGetMany && expect(afterGetMany).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(expected);
  });

  test('works with getMany by and condition', async () => {
    const { result: data } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: {
        $and: [
          { stringProperty: 'stringProperty1' },
          { stringPropertyOptional: 'stringPropertyOptional1' },
        ],
      },
    };
    const { result } = await service.getMany(input);
    const expected = filter(
      data,
      merge({
        values: ((input.filter as FilterCombineModel<DummyEntityResourceModel>).$and ||
          []) as Array<DummyEntityResourceModel>,
      }),
    ) as Array<DummyEntityResourceModel>;

    beforeGetMany && expect(beforeGetMany).toHaveBeenCalledTimes(1);
    afterGetMany && expect(afterGetMany).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(expected);
  });

  test('works with getMany by or condition', async () => {
    const { result: data } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: {
        $or: [{ stringProperty: 'stringProperty1' }, { stringPropertyOptional: 'does not exist' }],
      },
    };
    const { result } = await service.getMany(input);
    const expected = filter(data, (row) =>
      some((input.filter as FilterCombineModel<DummyEntityResourceModel>).$or, (condition) => {
        const _row = pick(row, keys(condition));
        return !isEmpty(_row) && isEqual(_row, condition);
      }),
    );

    beforeGetMany && expect(beforeGetMany).toHaveBeenCalledTimes(1);
    afterGetMany && expect(afterGetMany).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(expected);
  });

  test('works with getMany with skip and take', async () => {
    const SKIP = 1;
    const TAKE = 1;

    const { result: data } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
      options: { skip: SKIP, take: TAKE },
    };
    const { result } = await service.getMany(input);
    let expected = filter(data, input.filter) as Array<DummyEntityResourceModel>;
    expected = expected.slice(SKIP, SKIP + TAKE);

    beforeGetMany && expect(beforeGetMany).toHaveBeenCalledTimes(1);
    afterGetMany && expect(afterGetMany).toHaveBeenCalledTimes(1);
    expect(result).toStrictEqual(expected);
  });

  test('works with getConnection all result', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const { result } = await service.getConnection({ filter: {}, pagination: {} });

    beforeGetConnection && expect(beforeGetConnection).toHaveBeenCalledTimes(1);
    afterGetConnection && expect(afterGetConnection).toHaveBeenCalledTimes(1);
    expect(result?.edges.length).toStrictEqual(data.length);
    expect(result?.edges[0].node._id).toStrictEqual(data[0]._id);
    expect(result?.edges[data.length - 1].node._id).toStrictEqual(data[data.length - 1]._id);
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.endCursor).toStrictEqual(result?.edges[data.length - 1].cursor);
    expect(result?.pageInfo.hasNextPage).toBeFalsy();
    expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  });

  test('works with getConnection filtered result', async () => {
    const { result: data } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = {
      filter: { stringProperty: 'stringProperty1' },
      pagination: {},
    };
    const { result } = await service.getConnection(input);
    const expected = filter(data, input.filter) as Array<DummyEntityResourceModel>;

    beforeGetConnection && expect(beforeGetConnection).toHaveBeenCalledTimes(1);
    afterGetConnection && expect(afterGetConnection).toHaveBeenCalledTimes(1);
    expect(result?.edges.length).toStrictEqual(expected.length);
    expect(result?.edges[0].node._id).toStrictEqual(expected[0]._id);
    expect(result?.edges[expected.length - 1].node._id).toStrictEqual(
      expected[expected.length - 1]._id,
    );
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.endCursor).toStrictEqual(
      result?.edges[result?.edges.length - 1].cursor,
    );
    expect(result?.pageInfo.hasNextPage).toBeFalsy();
    expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  });

  test('works with getConnection paged result first', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const size = 2;
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = { filter: {}, pagination: { first: size } };
    const { result } = await service.getConnection(input);

    beforeGetConnection && expect(beforeGetConnection).toHaveBeenCalledTimes(1);
    afterGetConnection && expect(afterGetConnection).toHaveBeenCalledTimes(1);
    expect(result?.edges.length).toStrictEqual(size);
    expect(result?.edges[0].node._id).toStrictEqual(data[0]._id);
    expect(result?.edges[size - 1].node._id).toStrictEqual(data[size - 1]._id);
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.endCursor).toStrictEqual(
      result?.edges[result?.edges.length - 1].cursor,
    );
    expect(result?.pageInfo.hasNextPage).toBeTruthy();
    expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  });

  test('works with getConnection cursored paged result first', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const size = 2;
    const { result: allResult } = await service.getConnection({ filter: {}, pagination: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = { filter: {}, pagination: { after: allResult?.edges[size - 1].cursor, first: size } };
    const { result } = await service.getConnection(input);

    beforeGetConnection && expect(beforeGetConnection).toHaveBeenCalledTimes(2);
    afterGetConnection && expect(afterGetConnection).toHaveBeenCalledTimes(2);
    expect(result?.edges.length).toStrictEqual(size);
    expect(result?.edges[0].node._id).toStrictEqual(data[size]._id);
    expect(result?.edges[size - 1].node._id).toStrictEqual(data[size + 1]._id);
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.endCursor).toStrictEqual(
      result?.edges[result?.edges.length - 1].cursor,
    );
    expect(result?.pageInfo.hasNextPage).toBeTruthy();
    expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  });

  test('works with getConnection paged result last', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const size = 2;
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = { filter: {}, pagination: { last: size } };
    const { result } = await service.getConnection(input);

    beforeGetConnection && expect(beforeGetConnection).toHaveBeenCalledTimes(1);
    afterGetConnection && expect(afterGetConnection).toHaveBeenCalledTimes(1);
    expect(result?.edges.length).toStrictEqual(size);
    expect(result?.edges[0].node._id).toStrictEqual(data[data.length - 2]._id);
    expect(result?.edges[1].node._id).toStrictEqual(data[data.length - 1]._id);
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.endCursor).toStrictEqual(
      result?.edges[result?.edges.length - 1].cursor,
    );
    expect(result?.pageInfo.hasNextPage).toBeFalsy();
    expect(result?.pageInfo.hasPreviousPage).toBeTruthy();
  });

  test('works with getConnection cursored paged result last', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const size = 2;
    const { result: allResult } = await service.getConnection({ filter: {}, pagination: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = { filter: {}, pagination: { before: allResult?.edges[size].cursor, last: size } };
    const { result } = await service.getConnection(input);

    beforeGetConnection && expect(beforeGetConnection).toHaveBeenCalledTimes(2);
    afterGetConnection && expect(afterGetConnection).toHaveBeenCalledTimes(2);
    expect(result?.edges.length).toStrictEqual(size);
    expect(result?.edges[0].node._id).toStrictEqual(data[size - 2]._id);
    expect(result?.edges[1].node._id).toStrictEqual(data[size - 1]._id);
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.endCursor).toStrictEqual(
      result?.edges[result?.edges.length - 1].cursor,
    );
    expect(result?.pageInfo.hasNextPage).toBeFalsy();
    expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  });

  test('works with update by partial', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
      update: { stringProperty: 'stringProperty2' },
    };
    const { result } = await service.update(input);

    beforeUpdate && expect(beforeUpdate).toHaveBeenCalledTimes(1);
    afterUpdate && expect(afterUpdate).toHaveBeenCalledTimes(1);
    expect(result?.stringProperty).toStrictEqual('stringProperty2');
  });

  test('works with update by push', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
      update: { $push: { stringArrayProperty: 'stringArrayPropertyElement1' } },
    };
    const { result } = await service.update(input);

    beforeUpdate && expect(beforeUpdate).toHaveBeenCalledTimes(1);
    afterUpdate && expect(afterUpdate).toHaveBeenCalledTimes(1);
    expect(result?.stringArrayProperty).toStrictEqual([
      ...(data[0].stringArrayProperty || []),
      'stringArrayPropertyElement1',
    ]);
  });

  test('works with update by pull', async () => {
    const { result: data = [] } = await service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
      update: { $pull: { stringArrayProperty: 'stringArrayPropertyElement1' } },
    };
    const { result } = await service.update(input);
    const expected = filter(data[0].stringArrayProperty, input.update.$pull);

    beforeUpdate && expect(beforeUpdate).toHaveBeenCalledTimes(1);
    afterUpdate && expect(afterUpdate).toHaveBeenCalledTimes(1);
    expect(result?.stringArrayProperty || []).toStrictEqual(expected);
  });

  test('works with remove by id', async () => {
    const input: InputModel<
      RESOURCE_METHOD_TYPE.REMOVE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
    };
    await service.remove(input);
    const { result } = await service.get(input);

    beforeRemove && expect(beforeRemove).toHaveBeenCalledTimes(1);
    afterRemove && expect(afterRemove).toHaveBeenCalledTimes(1);
    expect(result).toBeFalsy();
  });
};
