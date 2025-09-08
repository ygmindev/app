import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type TestResourceImplementationParamsModel } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation.models';
import { config as databaseConfig } from '@lib/config/database/database.mongo';
import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import { expectEqualsTestableResource } from '@lib/shared/test/utils/expectEqualsTestableResource/expectEqualsTestableResource';
import every from 'lodash/every';

export const testResourceImplementation = <
  TType extends TestableResourceModel,
  TRoot extends unknown = undefined,
>({
  form,
  getImplementation,
  root: getRoot,
}: TestResourceImplementationParamsModel<TType, TRoot>): void => {
  describe('test resource implementation', () => {
    let cleanUp: (() => Promise<void>) | undefined;
    let implementation: ResourceImplementationModel<TType, TRoot>;
    let root: TRoot extends undefined ? never : string;
    let first: PartialModel<TType>;
    let second: PartialModel<TType>;

    beforeAll(async () => {
      ({ cleanUp } = await initialize({ database: databaseConfig.params() }));
      implementation = getImplementation();
      root = (await getRoot?.()) as TRoot extends undefined ? never : string;
      const { result } = await implementation.getMany({ root });
      if (!result) throw new NotFoundError('first');
      [first, second] = result;
    });

    afterAll(async () => {
      await cleanUp?.();
    });

    test('create', async () => {
      const { result } = await implementation.create({ form, root });
      expectEqualsTestableResource(result, form);
    });

    test('get by id', async () => {
      const { result } = await implementation.get({ id: first._id ?? '', root });
      expectEqualsTestableResource(result, first);
    });

    test('get by partial', async () => {
      const { result } = await implementation.get({
        filter: [{ field: 'string', value: first.string }],
        root,
      });
      expectEqualsTestableResource(result, first);
    });

    test('getMany by id', async () => {
      const { result } = await implementation.getMany({
        id: [first._id ?? '', second._id ?? ''],
        root,
      });
      console.warn(result);
      expectEqualsTestableResource(result, [first, second]);
    });

    test('getMany by partial', async () => {
      const GROUP = '2';
      const input = { filter: [{ field: 'group', value: GROUP }], root };
      const { result } = await implementation.getMany(input);
      expect(result).toBeDefined();
      expect(
        every(
          result?.map((v) => v.group),
          (v) => v === GROUP,
        ),
      ).toBeTruthy();
    });

    test('getMany with skip and take', async () => {
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

    test('getConnection all result', async () => {
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

    //   test('getConnection filtered result', async () => {
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

    //   test('getConnection paged result first', async () => {
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

    //   test('getConnection cursored paged result first', async () => {
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

    //   test('getConnection paged result last', async () => {
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

    //   test('getConnection cursored paged result last', async () => {
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

    test('update by id', async () => {
      const NEW_VALUE = 'new';
      const { result: updateResult } = await implementation.update({
        id: first._id ?? '',
        root,
        update: { string: NEW_VALUE } as UpdateModel<TType>,
      });
      expect(updateResult?.string).toStrictEqual(NEW_VALUE);
      const { result: getResult } = await implementation.get({
        id: first._id ?? '',
        root,
      });
      expect(getResult?.string).toStrictEqual(NEW_VALUE);
    });

    // test('update by partial', async () => {
    //   const NEW_VALUE = 'new';
    //   const { result: updateResult } = await implementation.update({
    //     filter: [{ field: 'string', value: first.string }],
    //     root,
    //     update: { string: NEW_VALUE } as UpdateModel<TType>,
    //   });
    //   expect(updateResult?.string).toStrictEqual(NEW_VALUE);
    //   const { result: getResult } = await implementation.get({
    //     id: [first._id ?? ''],
    //     root,
    //   });
    //   expect(getResult?.string).toStrictEqual(NEW_VALUE);
    // });

    test('upsert by id', async () => {
      const ID_UNKNOWN = '62170c5af3d27e919f30b100';
      const NEW_VALUE = 'new';

      // Do nothing for non-upsert
      const { result: updateResultNull } = await implementation.update({
        id: ID_UNKNOWN,
        options: { isUpsert: false },
        root,
        update: { isFixture: true, string: NEW_VALUE } as UpdateModel<TType>,
      });
      expect(updateResultNull).toBeFalsy();
      const { result: getResultNull } = await implementation.get({
        id: ID_UNKNOWN,
        root,
      });
      expect(getResultNull?.string).toBeFalsy();

      // Upsert
      const { result: updateResult } = await implementation.update({
        id: ID_UNKNOWN,
        options: { isUpsert: true },
        root,
        update: { isFixture: true, string: NEW_VALUE } as UpdateModel<TType>,
      });
      expect(updateResult?.string).toStrictEqual(NEW_VALUE);
      const { result: getResult } = await implementation.get({
        id: ID_UNKNOWN,
        root,
      });
      expect(getResult?.string).toStrictEqual(NEW_VALUE);
    });

    // test('upsert by partial', async () => {
    //   const VALUE_UNKNOWN = 'does not exist';
    //   const NEW_VALUE = 'new';

    //   // Do nothing for non-existant partial
    //   const { result: updateResultNull } = await implementation.update({
    //     filter: [{ field: 'string', value: VALUE_UNKNOWN }],
    //     options: { isUpsert: false },
    //     root,
    //     update: { isFixture: true, string: NEW_VALUE } as UpdateModel<TType>,
    //   });
    //   expect(updateResultNull).toBeFalsy();
    //   const { result: getResultNull } = await implementation.get({
    //     filter: [{ field: 'string', value: VALUE_UNKNOWN }],
    //     root,
    //   });
    //   expect(getResultNull?.string).toBeFalsy();

    //   // Upsert for existing partial
    //   const { result: updateResult } = await implementation.update({
    //     filter: [{ field: 'string', value: first.string }],
    //     options: { isUpsert: true },
    //     root,
    //     update: { isFixture: true, string: NEW_VALUE } as UpdateModel<TType>,
    //   });
    //   expect(updateResult?.string).toStrictEqual(NEW_VALUE);
    //   const { result: getResult } = await implementation.get({
    //     filter: [{ field: 'string', value: NEW_VALUE }],
    //     root,
    //   });
    //   expect(getResult?.string).toStrictEqual(NEW_VALUE);
    // });

    //   test('update by push', async () => {
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

    //   test('update by pull', async () => {
    //     const { result: data = [] } = await implementation.getMany({ filter: [] });
    //     const input = {
    //       filter: [{ field: '_id', value: data[0]._id }],
    //       update: { $pull: { stringArray: 'stringArrayElement1' } },
    //     } as InputModel<RESOURCE_METHOD_TYPE.UPDATE, TestableEntityResourceModel>;
    //     const { result } = await implementation.update(input);
    //     const expected = _filter(data[0].stringArray, input.update?.$pull);
    //     expect(result?.stringArray ?? []).toStrictEqual(expected);
    //   });

    //   test('update with project', async () => {
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

    test('remove by id', async () => {
      const { result: removeResult } = await implementation.remove({ id: [first._id ?? ''], root });
      expect(removeResult).toBeTruthy();
      const { result: getResult } = await implementation.get({ id: first._id ?? '', root });
      expect(getResult).toBeUndefined();
    });

    test('remove by partial', async () => {
      const GROUP = '2';
      const input = { filter: [{ field: 'group', value: GROUP }], root };
      const { result: removeResult } = await implementation.remove(input);
      expect(removeResult).toBeTruthy();
      const { result: getResult } = await implementation.get(input);
      expect(getResult).toBeUndefined();
    });
  });
};
