import { getConnection } from '#lib-backend/database/utils/getConnection/getConnection';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';
import _filter from 'lodash/filter';

const { displayName } = withTest({ getConnection });

describe(displayName, () => {
  const LIMIT = 3;

  const entities: Array<DummyEntityResourceFormModel> = [
    { stringProperty: 'stringProperty' },
    { stringProperty: 'stringProperty' },
    { stringProperty: 'stringProperty' },
    { stringProperty: 'stringProperty' },
    { stringProperty: 'stringProperty' },
    { stringProperty: 'stringProperty' },
  ];

  test('works', async () => {
    const result = await getConnection({
      count: entities.length,
      getMany: async ({ filter }) => ({ result: _filter(entities, filter) }),
      input: { filter: {} },
      pagination: { first: LIMIT },
    });
    expect(result?.edges.map(({ node }) => node)).toStrictEqual(entities);
  });

  test('works with filter', async () => {
    const filter = { stringProperty: 'stringProperty' };
    const result = await getConnection({
      count: entities.length,
      getMany: async ({ filter }) => ({
        result: _filter(entities, filter) as Array<DummyEntityResourceModel>,
      }),
      input: { filter: {} },
      pagination: { first: LIMIT },
    });
    const expected = _filter(entities, filter);
    expect(result?.edges.map(({ node }) => node)).toStrictEqual(expected);
  });
});
