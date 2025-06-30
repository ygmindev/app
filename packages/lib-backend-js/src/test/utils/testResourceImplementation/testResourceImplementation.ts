import { clearSeed } from '@lib/backend/database/utils/clearSeed/clearSeed';
import { seed } from '@lib/backend/database/utils/seed/seed';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type TestResourceImplementationParamsModel } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation.models';
import { config as databaseConfig } from '@lib/config/database/database.mongo';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import every from 'lodash/every';
import toString from 'lodash/toString';

export const testResourceImplementation = <
  TType extends TestableResourceModel,
  TRoot extends unknown = undefined,
>({
  form,
  getImplementation,
  root: getRoot,
}: TestResourceImplementationParamsModel<TType, TRoot>): void => {
  let cleanUp: (() => Promise<void>) | undefined;
  let implementation: ResourceImplementationModel<TType, TRoot>;
  let root: (TRoot extends undefined ? never : string) | undefined;
  let first: PartialModel<TType> | undefined;

  beforeAll(async () => {
    ({ cleanUp } = await initialize({ database: databaseConfig.params() }));
    await seed();
    implementation = getImplementation();
    root = (await getRoot?.()) as TRoot extends undefined ? never : string;
    root && (root = toString(root) as TRoot extends undefined ? never : string);
    first = (await implementation.getMany({ filter: [], root }))?.result?.[0];
  });

  afterAll(async () => {
    await clearSeed();
    await cleanUp?.();
  });

  test('works with create', async () => {
    const { result } = await implementation.create({ form, root });
    expect(result?._id).toBeDefined();
    expect(result?.created).toBeDefined();
    expect(result?.string).toStrictEqual(form.string);
  });

  test('works with get by id', async () => {
    const input = { id: [first?._id ?? ''], root };
    const { result } = await implementation.get(input);
    expect(result?._id).toStrictEqual(first?._id);
  });

  test('works with get by partial', async () => {
    const input = { filter: [{ field: 'string', value: first?.string }], root };
    const { result } = await implementation.get(input);
    expect(result?._id).toStrictEqual(first?._id);
  });

  test('works with getMany by partial', async () => {
    const GROUP = '3';
    const input = { filter: [{ field: 'group', value: GROUP }], root };
    const { result } = await implementation.getMany(input);
    expect(
      every(
        result?.map((v) => v.group),
        (v) => v === GROUP,
      ),
    ).toBeTruthy();
  });

  test('works with getMany with skip and take', async () => {
    const SKIP = 1;
    const TAKE = 2;
    const GROUP = '2';
    const input = {
      filter: [{ field: 'group', value: GROUP }],
      options: { skip: SKIP, take: TAKE },
      root,
    };
    const { result } = await implementation.getMany(input);
    expect(result?.length).toStrictEqual(TAKE);
    expect(result?.map((v) => v.index)).toStrictEqual([SKIP + 1, SKIP + 2]);
  });

  test('works with getConnection all result', async () => {
    const FIRST = 2;
    const GROUP = '2';
    const { result } = await implementation.getConnection({
      filter: [{ field: 'group', value: GROUP }],
      pagination: { first: FIRST },
      root,
    });
    expect(result?.edges.length).toStrictEqual(FIRST);
    expect(
      every(
        result?.edges?.map((v) => v.node.group),
        (v) => v === GROUP,
      ),
    ).toBeTruthy();
    // TODO: test more scenarios
    expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
    expect(result?.pageInfo.hasNextPage).toBeTruthy();
    expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  });

  //   test('works with getConnection filtered result', async () => {
  //     const { result: data } = await implementation.getMany({ filter: [] });
  //     const input = {
  //       filter: [{ field: 'string', value: 'string1' }],
  //       pagination: {},
  //     } as InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TestableEntityResourceModel>;
  //     const { result } = await implementation.getConnection(input);
  //     const expected = findAll(data, input.filter);
  //     expect(result?.edges.length).toStrictEqual(expected.length);
  //     expect(result?.edges[0].node._id).toStrictEqual(expected[0]._id);
  //     expect(result?.edges[expected.length - 1].node._id).toStrictEqual(
  //       expected[expected.length - 1]._id,
  //     );
  //     expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
  //     expect(result?.pageInfo.endCursor).toStrictEqual(
  //       result?.edges[result?.edges.length - 1].cursor,
  //     );
  //     expect(result?.pageInfo.hasNextPage).toBeFalsy();
  //     expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  //   });

  //   test('works with getConnection paged result first', async () => {
  //     const { result: data = [] } = await implementation.getMany({ filter: [] });
  //     const size = 2;
  //     const input = {
  //       filter: [],
  //       pagination: { first: size },
  //     } as InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TestableEntityResourceModel>;
  //     const { result } = await implementation.getConnection(input);

  //     expect(result?.edges.length).toStrictEqual(size);
  //     expect(result?.edges[0].node._id).toStrictEqual(data[0]._id);
  //     expect(result?.edges[size - 1].node._id).toStrictEqual(data[size - 1]._id);
  //     expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
  //     expect(result?.pageInfo.endCursor).toStrictEqual(
  //       result?.edges[result?.edges.length - 1].cursor,
  //     );
  //     expect(result?.pageInfo.hasNextPage).toBeTruthy();
  //     expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  //   });

  //   test('works with getConnection cursored paged result first', async () => {
  //     const { result: data = [] } = await implementation.getMany({ filter: [] });
  //     const size = 2;
  //     const { result: allResult } = await implementation.getConnection({
  //       filter: [],
  //       pagination: {},
  //     });
  //     const input = {
  //       filter: [],
  //       pagination: { after: allResult?.edges[size - 1].cursor, first: size },
  //     } as InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TestableEntityResourceModel>;
  //     const { result } = await implementation.getConnection(input);

  //     expect(result?.edges.length).toStrictEqual(size);
  //     expect(result?.edges[0].node._id).toStrictEqual(data[size]._id);
  //     expect(result?.edges[size - 1].node._id).toStrictEqual(data[size + 1]._id);
  //     expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
  //     expect(result?.pageInfo.endCursor).toStrictEqual(
  //       result?.edges[result?.edges.length - 1].cursor,
  //     );
  //     expect(result?.pageInfo.hasNextPage).toBeTruthy();
  //     expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  //   });

  //   test('works with getConnection paged result last', async () => {
  //     const { result: data = [] } = await implementation.getMany({ filter: [] });
  //     const size = 2;
  //     const input = {
  //       filter: [],
  //       pagination: { last: size },
  //     } as InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TestableEntityResourceModel>;
  //     const { result } = await implementation.getConnection(input);

  //     expect(result?.edges.length).toStrictEqual(size);
  //     expect(result?.edges[0].node._id).toStrictEqual(data[data.length - 2]._id);
  //     expect(result?.edges[1].node._id).toStrictEqual(data[data.length - 1]._id);
  //     expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
  //     expect(result?.pageInfo.endCursor).toStrictEqual(
  //       result?.edges[result?.edges.length - 1].cursor,
  //     );
  //     expect(result?.pageInfo.hasNextPage).toBeFalsy();
  //     expect(result?.pageInfo.hasPreviousPage).toBeTruthy();
  //   });

  //   test('works with getConnection cursored paged result last', async () => {
  //     const { result: data = [] } = await implementation.getMany({ filter: [] });
  //     const size = 2;
  //     const { result: allResult } = await implementation.getConnection({
  //       filter: [],
  //       pagination: {},
  //     });
  //     const input = {
  //       filter: [],
  //       pagination: { before: allResult?.edges[size].cursor, last: size },
  //     } as InputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TestableEntityResourceModel>;
  //     const { result } = await implementation.getConnection(input);

  //     expect(result?.edges.length).toStrictEqual(size);
  //     expect(result?.edges[0].node._id).toStrictEqual(data[size - 2]._id);
  //     expect(result?.edges[1].node._id).toStrictEqual(data[size - 1]._id);
  //     expect(result?.pageInfo.startCursor).toStrictEqual(result?.edges[0].cursor);
  //     expect(result?.pageInfo.endCursor).toStrictEqual(
  //       result?.edges[result?.edges.length - 1].cursor,
  //     );
  //     expect(result?.pageInfo.hasNextPage).toBeFalsy();
  //     expect(result?.pageInfo.hasPreviousPage).toBeFalsy();
  //   });

  test('works with update by id', async () => {
    const NEW_VALUE = 'new';
    const { result: updateResult } = await implementation.update({
      id: [first?._id ?? ''],
      root,
      update: { string: NEW_VALUE } as UpdateModel<TType>,
    });
    expect(updateResult?.string).toStrictEqual(NEW_VALUE);
    const { result: getResult } = await implementation.get({
      id: [first?._id ?? ''],
      root,
    });
    expect(getResult?.string).toStrictEqual(NEW_VALUE);
  });

  //   test('works with update by push', async () => {
  //     const { result: data = [] } = await implementation.getMany({ filter: [] });
  //     const input = {
  //       filter: [{ field: '_id', value: data[0]._id }],
  //       update: { $push: { stringArray: 'stringArrayElement1' } },
  //     } as InputModel<RESOURCE_METHOD_TYPE.UPDATE, TestableEntityResourceModel>;
  //     const { result } = await implementation.update(input);
  //     expect(result?.stringArray).toStrictEqual([
  //       ...(data[0].stringArray ?? []),
  //       'stringArrayElement1',
  //     ]);
  //   });

  //   test('works with update by pull', async () => {
  //     const { result: data = [] } = await implementation.getMany({ filter: [] });
  //     const input = {
  //       filter: [{ field: '_id', value: data[0]._id }],
  //       update: { $pull: { stringArray: 'stringArrayElement1' } },
  //     } as InputModel<RESOURCE_METHOD_TYPE.UPDATE, TestableEntityResourceModel>;
  //     const { result } = await implementation.update(input);
  //     const expected = _filter(data[0].stringArray, input.update?.$pull);
  //     expect(result?.stringArray ?? []).toStrictEqual(expected);
  //   });

  //   test('works with update with project', async () => {
  //     const { result: data = [] } = await implementation.getMany({ filter: [] });
  //     const input = {
  //       filter: [{ field: '_id', value: data[0]._id }],
  //       options: {
  //         project: PROJECT_FIELDS.reduce((result, field) => ({ ...result, [field]: true }), {}),
  //       },
  //       update: { string: 'string2' },
  //     } as InputModel<RESOURCE_METHOD_TYPE.UPDATE, TestableEntityResourceModel>;
  //     const { result } = await implementation.update(input);
  //     expect(result && Object.keys(result)).toStrictEqual(PROJECT_FIELDS);
  //   });

  test('works with remove by id', async () => {
    const input = { id: [first?._id ?? ''], root };
    const { result: removeResult } = await implementation.remove(input);
    expect(removeResult).toBeTruthy();
    const { result: getResult } = await implementation.get(input);
    expect(getResult).toBeFalsy();
  });
};
