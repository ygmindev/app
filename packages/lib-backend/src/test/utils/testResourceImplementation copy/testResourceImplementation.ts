import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { seed } from '@lib/backend/test/utils/seed/seed';
import {
  type TestableResourceImplementationModel,
  type TestResourceImplementationParamsModel,
} from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation.models';
import databaseConfig from '@lib/config/database/database.mongo';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
// import { type FilterCombineModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
// import { type FilterCombineModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import _filter from 'lodash/filter';
import find from 'lodash/find';
import reduce from 'lodash/reduce';

const _getFilter = (
  filters: Array<FilterModel<TestableEntityResourceModel>> = [],
): Record<keyof TestableEntityResourceModel, unknown> =>
  reduce(
    filters,
    (result, filter) => ({ ...result, [filter.field]: filter.value }),
    {} as Record<keyof TestableEntityResourceModel, unknown>,
  );

const _findAll = (
  data: Array<TestableEntityResourceModel> = [],
  filters: Array<FilterModel<TestableEntityResourceModel>> = [],
): Array<TestableEntityResourceModel> =>
  (_filter(data, _getFilter(filters)) as Array<TestableEntityResourceModel>) || [];

const _find = (
  data: Array<TestableEntityResourceModel> = [],
  filters: Array<FilterModel<TestableEntityResourceModel>> = [],
): TestableEntityResourceModel | null =>
  (find(data, _getFilter(filters)) as TestableEntityResourceModel) ?? null;

export const testResourceImplementation = async ({
  before,
  getImplementation,
}: TestResourceImplementationParamsModel): Promise<void> => {
  let implementation: TestableResourceImplementationModel;
  const PROJECT_FIELDS = ['_id', 'stringFieldOptional'] satisfies Array<
    keyof TestableEntityResourceModel
  >;

  beforeAll(async () => {
    await initialize({ database: databaseConfig.params() });
    implementation = getImplementation();
  });

  afterAll(async () => {
    await cleanup();
  });

  beforeEach(async () => {
    await seed();
    before && (await before(implementation));
    jest.clearAllMocks();
  });

  test('works with create', async () => {
    const input = {
      form: { stringField: 'stringField1', stringFieldOptional: undefined },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.CREATE,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.create(input);
    expect(result?._id).toBeDefined();
    expect(result?.created && new Date().getTime() - result?.created.getTime()).toBeLessThan(1000);
    expect(result?.stringField).toStrictEqual(input.form.stringField);
    expect(Object.keys(result as object)).not.toContainEqual('stringFieldOptional');
  });

  test('works with get by id', async () => {
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: '_id', value: data[0]._id }],
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.get(input);
    const expected = _find(data, input.filter);
    expect(result?._id).toStrictEqual(expected?._id);
  });

  test('works with get by partial', async () => {
    const { result: data } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: 'stringField', value: 'stringField1' }],
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.get(input);
    const expected = _find(data, input.filter);
    expect(result?._id).toStrictEqual(expected?._id);
  });

  // test('works with get by and condition', async () => {
  //   const { result: data } = await implementation.getMany({ filter: [] });
  //   const input: InputModel<
  //     RESOURCE_METHOD_TYPE.GET,
  //     TestableEntityResourceModel,
  //     TestableEntityResourceFormModel
  //   > = {
  //     filter: {
  //       $and: [
  //         { stringField: 'stringField1' },
  //         { stringFieldOptional: 'stringFieldOptional1' },
  //       ],
  //     },
  //   };
  //   const { result } = await implementation.get(input);
  //   const expected = find(
  //     data,
  //     merge(
  //       ((input.filter as FilterCombineModel<TestableEntityResourceModel>).$and ||
  //         []) as Array<TestableEntityResourceModel>,
  //     ),
  //   ) as TestableEntityResourceModel;

  //   expect(result?._id).toStrictEqual(expected._id);
  // });

  // test('works with get by or condition', async () => {
  //   const { result: data } = await implementation.getMany({ filter: [] });
  //   const input: InputModel<
  //     RESOURCE_METHOD_TYPE.GET,
  //     TestableEntityResourceModel,
  //     TestableEntityResourceFormModel
  //   > = {
  //     filter: {
  //       $or: [{ stringField: 'stringField1' }, { stringFieldOptional: 'does not exist' }],
  //     },
  //   };
  //   const { result } = await implementation.get(input);
  //   const expected = find(data, (row) =>
  //     some((input.filter as FilterCombineModel<TestableEntityResourceModel>).$or, (condition) => {
  //       const rowF = pick(row, Object.keys(condition) as Array<keyof typeof row>);
  //       return !isEmpty(rowF) && isEqual(rowF, condition);
  //     }),
  //   ) as TestableEntityResourceModel;

  //   expect(result?._id).toStrictEqual(expected._id);
  // });

  test('works with get with project', async () => {
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: '_id', value: data[0]._id }],
      options: {
        project: PROJECT_FIELDS.reduce((result, field) => ({ ...result, [field]: true }), {}),
      },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.get(input);
    const expected = _find(data, input.filter);
    expect(result?._id).toStrictEqual(expected?._id);
    expect(result && Object.keys(result)).toStrictEqual(PROJECT_FIELDS);
  });

  test('works with getMany by partial', async () => {
    const { result: data } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: 'stringField', value: 'stringField1' }],
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.getMany(input);
    const expected = _findAll(data, input.filter);
    expect(result).toStrictEqual(expected);
  });

  // test('works with getMany by and condition', async () => {
  //   const { result: data } = await implementation.getMany({ filter: [] });
  //   const input: InputModel<
  //     RESOURCE_METHOD_TYPE.GET_MANY,
  //     TestableEntityResourceModel,
  //     TestableEntityResourceFormModel
  //   > = {
  //     filter: {
  //       $and: [
  //         { stringField: 'stringField1' },
  //         { stringFieldOptional: 'stringFieldOptional1' },
  //       ],
  //     },
  //   };
  //   const { result } = await implementation.getMany(input);
  //   const expected = filter(
  //     data,
  //     merge(
  //       ((input.filter as FilterCombineModel<TestableEntityResourceModel>).$and ||
  //         []) as Array<TestableEntityResourceModel>,
  //     ),
  //   );

  //   expect(result).toStrictEqual(expected);
  // });

  // test('works with getMany by or condition', async () => {
  //   const { result: data } = await implementation.getMany({ filter: [] });
  //   const input: InputModel<
  //     RESOURCE_METHOD_TYPE.GET_MANY,
  //     TestableEntityResourceModel,
  //     TestableEntityResourceFormModel
  //   > = {
  //     filter: {
  //       $or: [{ stringField: 'stringField1' }, { stringFieldOptional: 'does not exist' }],
  //     },
  //   };
  //   const { result } = await implementation.getMany(input);
  //   const expected = filter(data, (row) =>
  //     some((input.filter as FilterCombineModel<TestableEntityResourceModel>).$or, (condition) => {
  //       const rowF = pick(row, Object.keys(condition) as Array<keyof typeof row>);
  //       return !isEmpty(rowF) && isEqual(rowF, condition);
  //     }),
  //   );

  //   expect(result).toStrictEqual(expected);
  // });

  test('works with getMany with skip and take', async () => {
    const SKIP = 1;
    const TAKE = 1;

    const { result: data } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: 'stringField', value: 'stringField1' }],
      options: { skip: SKIP, take: TAKE },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.getMany(input);
    let expected = _findAll(data, input.filter);
    expected = expected.slice(SKIP, SKIP + TAKE);
    expect(result).toStrictEqual(expected);
  });

  test('works with getMany with project', async () => {
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: 'stringField', value: 'stringField1' }],
      options: {
        project: PROJECT_FIELDS.reduce((result, field) => ({ ...result, [field]: true }), {}),
      },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET_MANY,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.getMany(input);
    const resultF = result && result[0];
    const expected = _find(data, input.filter);
    expect(resultF?._id).toStrictEqual(expected?._id);
    expect(resultF && Object.keys(resultF)).toStrictEqual(PROJECT_FIELDS);
  });

  test('works with getConnection all result', async () => {
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const { result } = await implementation.getConnection({ filter: [], pagination: {} });

    expect(result?.edges.length).toStrictEqual(data.length);
    expect(result?.edges[0].node._id).toStrictEqual(data[0]._id);
    expect(result?.edges[data.length - 1].node._id).toStrictEqual(data[data.length - 1]._id);
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.endCursor).toStrictEqual(result?.edges[data.length - 1].cursor);
    expect(result?.pageInfo.hasNextPage).toBeFalsy();
    expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  });

  test('works with getConnection filtered result', async () => {
    const { result: data } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: 'stringField', value: 'stringField1' }],
      pagination: {},
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      TestableEntityResourceModel,
      undefined
    >;
    const { result } = await implementation.getConnection(input);
    const expected = _findAll(data, input.filter);
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
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const size = 2;
    const input = { filter: [], pagination: { first: size } } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      TestableEntityResourceModel,
      undefined
    >;
    const { result } = await implementation.getConnection(input);

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
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const size = 2;
    const { result: allResult } = await implementation.getConnection({
      filter: [],
      pagination: {},
    });
    const input = {
      filter: [],
      pagination: { after: allResult?.edges[size - 1].cursor, first: size },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      TestableEntityResourceModel,
      undefined
    >;
    const { result } = await implementation.getConnection(input);

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
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const size = 2;
    const input = { filter: [], pagination: { last: size } } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      TestableEntityResourceModel,
      undefined
    >;
    const { result } = await implementation.getConnection(input);

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
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const size = 2;
    const { result: allResult } = await implementation.getConnection({
      filter: [],
      pagination: {},
    });
    const input = {
      filter: [],
      pagination: { before: allResult?.edges[size].cursor, last: size },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.GET_CONNECTION,
      TestableEntityResourceModel,
      undefined
    >;
    const { result } = await implementation.getConnection(input);

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
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: '_id', value: data[0]._id }],
      update: { stringField: 'stringField2' },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.update(input);

    expect(result?.stringField).toStrictEqual('stringField2');
  });

  test('works with update by push', async () => {
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: '_id', value: data[0]._id }],
      update: { $push: { stringArrayField: 'stringArrayFieldElement1' } },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.update(input);

    expect(result?.stringArrayField).toStrictEqual([
      ...(data[0].stringArrayField ?? []),
      'stringArrayFieldElement1',
    ]);
  });

  test('works with update by pull', async () => {
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: '_id', value: data[0]._id }],
      update: { $pull: { stringArrayField: 'stringArrayFieldElement1' } },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.update(input);
    const expected = _filter(data[0].stringArrayField, input.update.$pull);
    expect(result?.stringArrayField ?? []).toStrictEqual(expected);
  });

  test('works with update with project', async () => {
    const { result: data = [] } = await implementation.getMany({ filter: [] });
    const input = {
      filter: [{ field: '_id', value: data[0]._id }],
      options: {
        project: PROJECT_FIELDS.reduce((result, field) => ({ ...result, [field]: true }), {}),
      },
      update: { stringField: 'stringField2' },
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.UPDATE,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    const { result } = await implementation.update(input);
    expect(result && Object.keys(result)).toStrictEqual(PROJECT_FIELDS);
  });

  test('works with remove by id', async () => {
    const input = {
      filter: [{ field: 'stringField', value: 'stringField1' }],
    } satisfies InputModel<
      RESOURCE_METHOD_TYPE.REMOVE,
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >;
    await implementation.remove(input);
    const { result } = await implementation.get(input);
    expect(result).toBeFalsy();
  });
};
