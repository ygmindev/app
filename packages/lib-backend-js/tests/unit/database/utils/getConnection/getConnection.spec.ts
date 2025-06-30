import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import { type EntityResourceDataModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import _filter from 'lodash/filter';

const { displayName } = withTest({ getConnection });

describe(displayName, () => {
  const LIMIT = 3;

  const entities: Array<EntityResourceDataModel<TestableEntityResourceModel>> = [
    { string: 'string' },
    { string: 'string' },
    { string: 'string' },
    { string: 'string' },
    { string: 'string' },
    { string: 'string' },
  ];

  test('works', async () => {
    const { result } = await getConnection({
      count: entities.length,
      getMany: async ({ filter }) => ({ result: _filter(entities, filter) }),
      input: { filter: [] },
      pagination: { first: LIMIT },
    });
    expect(result?.edges.map(({ node }) => node)).toStrictEqual(entities);
  });

  test('works with filter', async () => {
    const filter = { string: 'string' };
    const result = await getConnection({
      count: entities.length,
      getMany: async ({ filter }) => ({
        result: _filter(entities, filter),
      }),
      input: { filter: [] },
      pagination: { first: LIMIT },
    });
    const expected = _filter(entities, filter);
    expect(result?.result?.edges.map(({ node }) => node)).toStrictEqual(expected);
  });
});
