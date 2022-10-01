import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';
import { filter as _filter, map } from 'lodash';

const { displayName } = withTest({ target: () => getConnection });

describe(displayName, () => {
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
      filter: {},
      getMany: async ({ filter }) => ({ result: _filter(entities, filter) }),
      pagination: {},
    });
    expect(map(result?.edges, 'node')).toStrictEqual(entities);
  });

  test('works with filter', async () => {
    const filter = { stringProperty: 'stringProperty' };
    const result = await getConnection({
      count: entities.length,
      filter,
      getMany: async ({ filter }) => ({
        result: _filter(entities, filter) as Array<DummyEntityResourceModel>,
      }),
      pagination: {},
    });
    const expected = _filter(entities, filter);
    expect(map(result?.edges, 'node')).toStrictEqual(expected);
  });
});
