import { mongoFilter } from '@lib/backend/database/utils/mongoFilter/mongoFilter';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ mongoFilter });

describe(displayName, () => {
  test('works', async () => {
    let result = mongoFilter({ id: ['65e0b6b0b2e8c2a3f4e5d6c7'] });
    console.warn(result);

    result = mongoFilter({ filter: [{ field: 'FIELD_NAME', value: 'FIELD_VALUE' }] });
    console.warn(result);
    expect(result).toStrictEqual({});
  });
});
