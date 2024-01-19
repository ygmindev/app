import _filter from 'lodash/filter';

import { getConnection } from '@lib/backend/database/utils/getConnection/getConnection';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getConnection });

describe(displayName, () => {
  const LIMIT = 3;

  const entities: Array<TestableEntityResourceFormModel> = [
    { stringField: 'stringField' },
    { stringField: 'stringField' },
    { stringField: 'stringField' },
    { stringField: 'stringField' },
    { stringField: 'stringField' },
    { stringField: 'stringField' },
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
    const filter = { stringField: 'stringField' };
    const result = await getConnection({
      count: entities.length,
      getMany: async ({ filter }) => ({
        result: _filter(entities, filter) as Array<TestableEntityResourceModel>,
      }),
      input: { filter: [] },
      pagination: { first: LIMIT },
    });
    const expected = _filter(entities, filter);
    expect(result?.edges.map(({ node }) => node)).toStrictEqual(expected);
  });
});
