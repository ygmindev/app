import { seed } from '@lib/backend/database/utils/seed/seed';
import type {
  TestableResourceServiceModel,
  TestResourceServiceParamsModel,
} from '@lib/backend/test/utils/testResourceService/testResourceService.models';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { FilterCombineModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import filter from 'lodash/filter';
import find from 'lodash/find';
import pick from 'lodash/pick';
import some from 'lodash/some';

export const testResourceService = async ({
  before,
  getService,
}: TestResourceServiceParamsModel): Promise<void> => {
  let _service: TestableResourceServiceModel;
  const PROJECT_FIELDS: Array<keyof DummyEntityResourceModel> = ['_id', 'stringPropertyOptional'];

  beforeAll(async () => {
    _service = await getService();
  });

  beforeEach(async () => {
    await seed({ names: [DUMMY_ENTITY_RESOURCE_RESOURCE_NAME] });
    before && (await before(_service));
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
    const { result } = await _service.create(input);
    expect(result?._id).toBeDefined();
    expect(result?.created && new Date().getTime() - result?.created.getTime()).toBeLessThan(1000);
    expect(result?.stringProperty).toStrictEqual(input.form.stringProperty);
    expect(Object.keys(result as object)).not.toContainEqual('stringPropertyOptional');
  });

  test('works with get by id', async () => {
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
    };
    const { result } = await _service.get(input);
    const expected = find(data, input.filter) as DummyEntityResourceModel;
    expect(result?._id).toStrictEqual(expected._id);
  });

  test('works with get by partial', async () => {
    const { result: data } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
    };
    const { result } = await _service.get(input);
    const expected = find(data, input.filter) as DummyEntityResourceModel;

    expect(result?._id).toStrictEqual(expected._id);
  });

  test('works with get by and condition', async () => {
    const { result: data } = await _service.getMany({ filter: {} });
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
    const { result } = await _service.get(input);
    const expected = find(
      data,
      merge(
        ((input.filter as FilterCombineModel<DummyEntityResourceModel>).$and ||
          []) as Array<DummyEntityResourceModel>,
      ),
    ) as DummyEntityResourceModel;

    expect(result?._id).toStrictEqual(expected._id);
  });

  test('works with get by or condition', async () => {
    const { result: data } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: {
        $or: [{ stringProperty: 'stringProperty1' }, { stringPropertyOptional: 'does not exist' }],
      },
    };
    const { result } = await _service.get(input);
    const expected = find(data, (row) =>
      some((input.filter as FilterCombineModel<DummyEntityResourceModel>).$or, (condition) => {
        const _row = pick(row, Object.keys(condition));
        return !isEmpty(_row) && isEqual(_row, condition);
      }),
    ) as DummyEntityResourceModel;

    expect(result?._id).toStrictEqual(expected._id);
  });

  test('works with get with project', async () => {
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
      options: {
        project: PROJECT_FIELDS.reduce((result, field) => ({ ...result, [field]: true }), {}),
      },
    };
    const { result } = await _service.get(input);
    const expected = find(data, input.filter) as DummyEntityResourceModel;

    expect(result?._id).toStrictEqual(expected._id);
    expect(result && Object.keys(result)).toStrictEqual(PROJECT_FIELDS);
  });

  test('works with getMany by partial', async () => {
    const { result: data } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
    };
    const { result } = await _service.getMany(input);
    const expected = filter(data, input.filter) as Array<DummyEntityResourceModel>;

    expect(result).toStrictEqual(expected);
  });

  test('works with getMany by and condition', async () => {
    const { result: data } = await _service.getMany({ filter: {} });
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
    const { result } = await _service.getMany(input);
    const expected = filter(
      data,
      merge(
        ((input.filter as FilterCombineModel<DummyEntityResourceModel>).$and ||
          []) as Array<DummyEntityResourceModel>,
      ),
    ) as Array<DummyEntityResourceModel>;

    expect(result).toStrictEqual(expected);
  });

  test('works with getMany by or condition', async () => {
    const { result: data } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: {
        $or: [{ stringProperty: 'stringProperty1' }, { stringPropertyOptional: 'does not exist' }],
      },
    };
    const { result } = await _service.getMany(input);
    const expected = filter(data, (row) =>
      some((input.filter as FilterCombineModel<DummyEntityResourceModel>).$or, (condition) => {
        const _row = pick(row, Object.keys(condition));
        return !isEmpty(_row) && isEqual(_row, condition);
      }),
    );

    expect(result).toStrictEqual(expected);
  });

  test('works with getMany with skip and take', async () => {
    const SKIP = 1;
    const TAKE = 1;

    const { result: data } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
      options: { skip: SKIP, take: TAKE },
    };
    const { result } = await _service.getMany(input);
    let expected = filter(data, input.filter) as Array<DummyEntityResourceModel>;
    expected = expected.slice(SKIP, SKIP + TAKE);

    expect(result).toStrictEqual(expected);
  });

  test('works with getMany with project', async () => {
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
      options: {
        project: PROJECT_FIELDS.reduce((result, field) => ({ ...result, [field]: true }), {}),
      },
    };
    const { result } = await _service.getMany(input);
    const _result = result && result[0];
    const expected = find(data, input.filter) as DummyEntityResourceModel;

    expect(_result?._id).toStrictEqual(expected._id);
    expect(_result && Object.keys(_result)).toStrictEqual(PROJECT_FIELDS);
  });

  test('works with getConnection all result', async () => {
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const { result } = await _service.getConnection({ filter: {}, pagination: {} });

    expect(result?.edges.length).toStrictEqual(data.length);
    expect(result?.edges[0].node._id).toStrictEqual(data[0]._id);
    expect(result?.edges[data.length - 1].node._id).toStrictEqual(data[data.length - 1]._id);
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.endCursor).toStrictEqual(result?.edges[data.length - 1].cursor);
    expect(result?.pageInfo.hasNextPage).toBeFalsy();
    expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  });

  test('works with getConnection filtered result', async () => {
    const { result: data } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = {
      filter: { stringProperty: 'stringProperty1' },
      pagination: {},
    };
    const { result } = await _service.getConnection(input);
    const expected = filter(data, input.filter) as Array<DummyEntityResourceModel>;

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
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const size = 2;
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = { filter: {}, pagination: { first: size } };
    const { result } = await _service.getConnection(input);

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
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const size = 2;
    const { result: allResult } = await _service.getConnection({ filter: {}, pagination: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = { filter: {}, pagination: { after: allResult?.edges[size - 1].cursor, first: size } };
    const { result } = await _service.getConnection(input);

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
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const size = 2;
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = { filter: {}, pagination: { last: size } };
    const { result } = await _service.getConnection(input);

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
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const size = 2;
    const { result: allResult } = await _service.getConnection({ filter: {}, pagination: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      DummyEntityResourceModel,
      undefined
    > = { filter: {}, pagination: { before: allResult?.edges[size].cursor, last: size } };
    const { result } = await _service.getConnection(input);

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
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
      update: { stringProperty: 'stringProperty2' },
    };
    const { result } = await _service.update(input);

    expect(result?.stringProperty).toStrictEqual('stringProperty2');
  });

  test('works with update by push', async () => {
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
      update: { $push: { stringArrayProperty: 'stringArrayPropertyElement1' } },
    };
    const { result } = await _service.update(input);

    expect(result?.stringArrayProperty).toStrictEqual([
      ...(data[0].stringArrayProperty || []),
      'stringArrayPropertyElement1',
    ]);
  });

  test('works with update by pull', async () => {
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
      update: { $pull: { stringArrayProperty: 'stringArrayPropertyElement1' } },
    };
    const { result } = await _service.update(input);
    const expected = filter(data[0].stringArrayProperty, input.update.$pull);

    expect(result?.stringArrayProperty || []).toStrictEqual(expected);
  });

  test('works with update with project', async () => {
    const { result: data = [] } = await _service.getMany({ filter: {} });
    const input: InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { _id: data[0]._id },
      options: {
        project: PROJECT_FIELDS.reduce((result, field) => ({ ...result, [field]: true }), {}),
      },
      update: { stringProperty: 'stringProperty2' },
    };
    const { result } = await _service.update(input);

    expect(result && Object.keys(result)).toStrictEqual(PROJECT_FIELDS);
  });

  test('works with remove by id', async () => {
    const input: InputModel<
      RESOURCE_METHOD_TYPE.REMOVE,
      DummyEntityResourceModel,
      DummyEntityResourceFormModel
    > = {
      filter: { stringProperty: 'stringProperty1' },
    };
    await _service.remove(input);
    const { result } = await _service.get(input);

    expect(result).toBeFalsy();
  });
};
